/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode with class switching
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      // ===== Color Palette =====
      colors: {
        // Primary Brand Colors
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#1E3A8A", // Main primary color
        },
        secondary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316", // Main secondary color
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        accent: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981", // Main accent color
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        // Neutral Colors
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1E293B", // Main dark color
          900: "#0f172a",
        },
        light: "#F8FAFC",
        // Status Colors
        success: "#10b981",
        warning: "#f59e0b",
        danger: "#ef4444",
        info: "#3b82f6",
      },

      // ===== Typography =====
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        arabic: ['"Noto Sans Arabic"', "sans-serif"],
      },
      fontSize: {
        "2xs": "0.625rem",
      },

      // ===== Spacing & Sizing =====
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },

      // ===== Border Radius =====
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      // ===== Box Shadow =====
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
        hard: "0 4px 20px rgba(0, 0, 0, 0.2)",
        "inner-lg": "inset 0 4px 8px 0 rgba(0, 0, 0, 0.1)",
        neumorphism: "8px 8px 16px #d9d9d9, -8px -8px 16px #ffffff",
      },

      // ===== Animations & Transitions =====
      animation: {
        // Entry Animations
        "slide-in": "slideIn 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.3s ease-in forwards",
        "slide-up": "slideUp 0.4s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
        "slide-left": "slideLeft 0.4s ease-out forwards",
        "slide-right": "slideRight 0.4s ease-out forwards",

        // Attention Grabbers
        "pulse-slow": "pulse 3s infinite",
        "bounce-slow": "bounce 2s infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",

        // Special Effects
        float: "float 6s ease-in-out infinite",
        "rotate-y": "rotateY 8s linear infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        // Entry Animations
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },

        // Special Effects
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
      },

      // ===== Custom Utilities =====
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "car-pattern": "url('/src/assets/images/car-bg-pattern.svg')",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        // Glass Morphism Effect
        ".glass": {
          background: "rgba(255, 255, 255, 0.1)",
          "backdrop-filter": "blur(10px)",
          "-webkit-backdrop-filter": "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
        // Text Stroke
        ".text-stroke": {
          "-webkit-text-stroke": "1px currentColor",
          "text-stroke": "1px currentColor",
        },
        // 3D Transform
        ".preserve-3d": {
          "transform-style": "preserve-3d",
        },
        // Hide Scrollbar
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
