/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        trafficRed: '#FF3B30',
        trafficYellow: '#FFCC00',
        trafficGreen: '#34C759',
      },
    },
  },
  plugins: [],
}
