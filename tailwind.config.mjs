/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    container: false, // ✅ كده بتعطلها تمامًا
  },
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 2.17631px 7.61708px rgba(155, 204, 244, 0.24)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
