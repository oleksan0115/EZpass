/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        md: '18px',
        lg: '22px',
        '2xl': '28px'
      },
      colors: {
        white: '#FFFFFF',
        black: '#2E2E2E',
        grayLight: '#F1F1F1',
        grayLight2: "#F8F8F8",
        gray: "#D1D1D1",
        success: "#48CE6D",
        blue: "#0659D3",
        blueLight: "#D2E2FA",

        orange: "#F0871F",
        danger: "#E94242",
        help: '#A7A7A7',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
      },
      borderRadius: {
        'xs': '8px',
        'sm': '12px',
        'base': '16px',
        'lg': '20px',
        'md': '24px',
        'xl': '30px',
        '3xl': '42px',
      },
      fontFamily: {
        rubikRegular: ["rubik-regular", "sans-serf"],
        rubikMedium: ["rubik-medium", "sans-serif"],
        rubikSemibold: ["rubik-semibold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
