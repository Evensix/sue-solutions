/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./stories/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  prefix: "",
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      "2sm": "560px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
      xxl: "2048px",
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",

      
      button: {
        "background-primary": "var(--hsla-button-background-primary)",
        "background-primary-hover": "var(--hsla-button-background-primary-hover)",
        "background-primary-disabled": "var(--hsla-button-background-primary-disabled)",
        "text-primary": "var(--hsla-button-text-primary) ",
        "text-primary-disabled": "var(--hsla-button-text-primary-disabled) ",
        "text-primary-hover": "var(--hsla-button-text-primary-hover)",
        "primary-border": "var(--hsla-button-primary-outline) ",
        "primary-halo": "var(--hsla-button-primary-halo) ",

        "background-secondary": "var(--hsla-button-background-secondary)",
        "background-secondary-hover": "var(--hsla-button-background-secondary-hover)",
        "background-secondary-disabled": "var(--hsla-button-background-secondary-disabled)",
        "text-secondary": "var(--hsla-button-text-secondary) ",
        "text-secondary-disabled": "var(--hsla-button-text-secondary-disabled) ",
        "text-secondary-hover": "var(--hsla-button-text-secondary-hover)",
        "secondary-border": "var(--hsla-button-secondary-outline) ",
        "secondary-halo": "var(--hsla-button-secondary-halo)",

        "background-tertiary": "var(--hsla-button-background-tertiary)",
        "background-tertiary-hover": "var(--hsla-button-background-tertiary-hover)",
        "background-tertiary-disabled": "var(--hsla-button-background-tertiary-disabled)",
        "text-tertiary": "var(--hsla-button-text-tertiary)",
        "text-tertiary-disabled": "var(--hsla-button-text-tertiary-disabled)",
        "text-tertiary-hover": "var(--hsla-button-text-tertiary-hover)",
        "tertiary-border": "var(--hsla-button-tertiary-outline) ",
        "tertiary-halo": "var(--hsla-button-tertiary-halo)",

        "background-link": "var(--hsla-button-background-link)",
        "background-link-hover": "var(--hsla-button-background-link-hover)",
        "background-link-disabled": "var(--hsla-button-background-link-disabled)",
        "text-link": "var(--hsla-button-text-link)",
        "text-link-disabled": "var(--hsla-button-text-link-disabled)",
        "text-link-hover": "var(--hsla-button-text-link-hover)",
        "link-border": "var(--hsla-button-link-outline) ",
        "link-halo": "var(--hsla-button-link-halo)",
      },

      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      "fade-in": {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
    },

    fontSize: {
      // Headings
      "heading-56": [
        "3.5rem",
        {
          lineHeight: "4.25",
          letterSpacing: "-0.02em",
          fontWeight: "600",
        },
      ],
      // Body
      "body-18": [
        "clamp(1.063rem, 1.042rem + 0.093vw, 1.125rem)",
        {
          lineHeight: "160%",
          letterSpacing: "-0.02em",
          fontWeight: "400",
        },
      ],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
