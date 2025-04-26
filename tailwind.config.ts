import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Add safelist to ensure dynamically generated tag classes are included
  safelist: [
    // Add all potential background, text, and border color classes used in tagUtils.ts
    // You might want to refine this list based on the exact classes used
    {
      pattern: /bg-(blue|gray|red|green|yellow|indigo|purple|pink)-(100)/,
    },
    {
      pattern: /text-(blue|gray|red|green|yellow|indigo|purple|pink)-(800|400|300)/,
    },
    {
      pattern: /border-(blue|gray|red|green|yellow|indigo|purple|pink)-(400|500|300)/,
    },
    // Include dark mode variants if necessary (though tagUtils handles dark explicitly)
    // Example: 'dark:bg-gray-700', 'dark:text-blue-400', etc.
    // It might be simpler to list the specific dark mode classes used:
    'dark:bg-gray-700',
    'dark:text-blue-400',
    'dark:text-gray-400',
    'dark:text-red-400',
    'dark:text-green-400',
    'dark:text-yellow-300',
    'dark:text-indigo-400',
    'dark:text-purple-400',
    'dark:text-pink-400',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: {
          bg: '#000000',
          card: '#111111',
          accent: '#1e3a8a',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config