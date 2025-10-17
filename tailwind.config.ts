import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF3D00',
        secondary: '#FFD180',
        light: '#FAFAFA',
        dark: '#121212',
      },
    },
  },
  plugins: [],
}
export default config
