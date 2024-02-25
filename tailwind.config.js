/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      // => @media (min-width: 768px) { ... }

      md: "940px",
      // => @media (min-width: 940px) { ... }

      lg: "1200px",
      // => @media (min-width: 1200px) { ... }

      xl: "1900px",
      // => @media (min-width: 1900px) { ... }
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "768px",
        // => @media (min-width: 768px) { ... }

        md: "940px",
        // => @media (min-width: 940px) { ... }

        lg: "1200px",
        // => @media (min-width: 1200px) { ... }

        xl: "1900px",
        // => @media (min-width: 1900px) { ... }
      },
    },
    extend: {
      fontWeight: {
        bold: "700",
        medium: "500",
        normal: "400",
        hairline: "300",
      },
      colors: {
        primary: {
          50: "#CCE6CC",
          100: "#99CC99",
          200: "#66B366",
          300: "#4DA64D",
          400: "#1A8D1A",
          500: "#008000",
          600: "#006600",
          700: "#004D00",
          800: "#003300",
          900: "#001A00",
        },
        secondary: {
          50: "#E6E6FF",
          100: "#B3B3FF",
          200: "#8080FF",
          300: "#4D4DFF",
          400: "#1A1AFF",
          500: "#0000E6",
          600: "#0000B3",
          700: "#000080",
          800: "#00004C",
          900: "#000019",
        },
        neutral: {
          50: "#F2F2F2",
          100: "#D9D9D9",
          200: "#C0C0C0",
          300: "#A6A6A6",
          400: "#8D8D8D",
          500: "#737373",
          600: "#5A5A5A",
          700: "#404040",
          800: "#262626",
          900: "#0D0D0D",
        },
        accent: {
          50: "#FFEEE9",
        },
        border: {
          primary: "#D0D5DD",
        },
        placeholder: "#667085",
        icon: "#98A2B3",
        danger: {
          red: "#FF5722",
          15: "#FF916F",
          5: "#FFEEE9",
        },
        white: {
          DEFAULT: "#fefefe",
          light: "rgba(255,255,255,0.5)",
        },
        black: {
          darkText: "#0D1421",
          darkBg: "#19211a",
          darkCardBg: "#222531",
        },
      },
      borderRadius: {
        lg: "18px",
        md: "12px",
        sm: "8px",
        xs: "4px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
