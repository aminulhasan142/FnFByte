/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        First: ["Poppins", "sans-serif"],
      },
      flex: {
        2: "1 0 0%",
      },
      colors: {
        "navbar-color": "#18181b",
        "border-primary": "#27272A",
        "border-brand": "#4F46E5",
        "border-color": "#ffffff4d",
        "border-dark": "#3F3F46",
        "text-primary": "#A1A1AA",
        "text-secondary": "#E4E4E7",
        "nav-gradient-one": "#18191c",
        "nav-gradient-two": "#161a24",
        "text-muted": "#A1A1AA",
        "surface-brand": "#4F46E5",
        "surface-primary": "#1E293B",
        "surface-background": "#18181B",
        "surface-brand-hover": "#4f46a8",
      },
      boxShadow: {
        "3xl": "0 5px 24px 0px rgba(0, 0, 0, 0.03)",
        "4xl": "0 5px 60px 10px rgba(11, 82, 235, 0.10)",
        "5xl": "0 26px 26px 0px rgba(7, 110, 154, 0.10)",
        "6xl": "0px 3px 5px 0px rgba(30, 41, 59, 0.03)",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/Line.svg')",
        "hero-light": "url('/img/light.svg')",
        "hero-light1": "url('/img/light1.svg')",
        "hero-light2": "url('/img/light2.svg')",
        "hero-swiper-img": "url('/img/heroswiper.png')",
        "hero-swiper-img1": "url('/img/heroswiper1.png')",
        "hero-swiper-svg": "url('/img/chipbadge.svg')",
        "service-svg": "url('/img/Ellipse.svg')",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        sticker: {
          "0%": {
            transform: "rotate(0deg) scale(1)",
          },
          "33%": {
            transform: "rotate(80deg) scale(1.5)",
          },
          "66%": {
            transform: "rotate(120deg) scale(1.5)",
          },
          "100%": {
            transform: "rotate(180deg) scale(1)",
          },
        },
      },
      screens: {
        "3xl": "1744px",
      },
    },
  },
  plugins: [],
};
