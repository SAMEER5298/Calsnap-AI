import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        card: '#111827',
        accent: '#22c55e',
        muted: '#6b7280',
        'border-subtle': 'rgba(255,255,255,0.08)',
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
