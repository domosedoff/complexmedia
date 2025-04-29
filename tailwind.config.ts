// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography"; // Используем import

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Ваши расширения темы (если есть)
    },
  },
  plugins: [
    typography, // Используем импортированный плагин
  ],
};

export default config; // Используем export default
