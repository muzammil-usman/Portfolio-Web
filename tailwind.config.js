// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // New Color Palette
        primary: {
          DEFAULT: "#1a1a1a", // Main background
          50: "#222222", // Card background
          100: "#2a2a2a", // Hover states
          200: "#333333", // Borders
        },
        accent: {
          DEFAULT: "#777C6D", // Main accent - Sage Green
          sage: "#777C6D", // Primary accent
          cream: "#B7B89F", // Secondary accent
          silver: "#CBCBCB", // Tertiary accent
          white: "#EEEEEE", // Text highlight
        },
        text: {
          primary: "#EEEEEE", // Main text
          secondary: "#CBCBCB", // Secondary text
          muted: "#B7B89F", // Muted text
          accent: "#777C6D", // Accent text
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "sage-gradient":
          "linear-gradient(135deg, #777C6D 0%, #B7B89F 50%, #CBCBCB 100%)",
        "cream-gradient":
          "linear-gradient(135deg, #B7B89F 0%, #CBCBCB 50%, #EEEEEE 100%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
