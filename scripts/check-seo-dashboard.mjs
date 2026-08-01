import assert from "node:assert/strict";
import { getSeoPeriod, latestPosition } from "../src/seoDashboard.ts";

assert.deepEqual(getSeoPeriod(undefined, undefined, "2026-07-30"), {
  start: "2026-07-01",
  end: "2026-07-30",
});
assert.deepEqual(getSeoPeriod("2026-07-10", "2026-07-01", "2026-07-30"), {
  start: "2026-06-02",
  end: "2026-07-01",
});
assert.deepEqual(
  latestPosition(
    [
      { date: "2026-07-22", position: 20, clicks: 0, impressions: 1 },
      { date: "2026-07-28", position: 16, clicks: 1, impressions: 2 },
      { date: "2026-07-29", position: 14, clicks: 1, impressions: 3 },
    ],
    "2026-07-30",
  ),
  { position: 14, day: 2, week: 6 },
);

console.log("SEO dashboard checks passed");
