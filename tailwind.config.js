/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        First: ["Poppins", "sans-serif"],
      },
      colors: {
        "navbar-color": "#18181b",
        "border-primary": "#27272A",
        "nav-gradient-one": "#18191c",
        "nav-gradient-two": "#161a24",
        "text-muted": "#A1A1AA",
        "surface-brand": "#4F46E5",
        "surface-brand-hover": "#4f46a8",
      },
      boxShadow: {
        "3xl": "0 5px 24px 0px rgba(0, 0, 0, 0.03)",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/Line.svg')",
        "hero-light": "url('/img/light.svg')",
        "hero-light1": "url('/img/light1.svg')",
        "hero-light2": "url('/img/light2.svg')",
        "hero-swiper-img": "url('/img/heroswiper.png')",
        "hero-swiper-img1": "url('/img/heroswiper1.png')",
      },
    },
  },
  plugins: [],
};
