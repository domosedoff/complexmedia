#!/usr/bin/env bash
set -euo pipefail

cd /var/www/complexmedia
exec 9>/tmp/complexmedia.deploy.lock
flock -n 9 || {
  echo "Another ComplexMedia deploy is running"
  exit 1
}

favicon_backup="$(mktemp)"
if [[ -f public/favicon.ico ]]; then
  cp public/favicon.ico "$favicon_backup"
  if git ls-files --error-unmatch public/favicon.ico >/dev/null 2>&1; then
    git restore --worktree public/favicon.ico
  fi
fi

git fetch origin master
git merge --ff-only origin/master

if [[ -s "$favicon_backup" ]]; then
  cp "$favicon_backup" public/favicon.ico
fi
rm -f "$favicon_backup"

npm ci
npm run build
if [[ ! -f .next/standalone/server.js ]]; then
  echo "Standalone Next.js server was not generated"
  exit 1
fi
mkdir -p .next/standalone/public .next/standalone/.next
cp -a public/. .next/standalone/public/
cp -a .next/static .next/standalone/.next/

environment_file=/home/ubuntu/.config/complexmedia/dashboard.env
if [[ -r "$environment_file" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$environment_file"
  set +a
fi

if command -v systemctl >/dev/null 2>&1 && systemctl list-unit-files complexmedia.service 2>/dev/null | grep -q '^complexmedia\.service'; then
  sudo systemctl restart complexmedia
elif command -v pm2 >/dev/null 2>&1; then
  pm2 restart complexmedia --update-env
else
  echo "Neither systemd complexmedia nor PM2 is available" >&2
  exit 1
fi

for attempt in {1..30}; do
  if curl --fail --silent --show-error http://127.0.0.1:3000/ >/dev/null; then
    exit 0
  fi
  sleep 1
done
echo "Production server did not become ready on port 3000"
exit 1
