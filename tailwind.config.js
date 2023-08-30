/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl:'1440px'
    },
      letterSpacing: {
        '1': '0em',
        '2': '0.025em',
        '3': '0.05em',
        '4': '0.3em',
      },
    extend: {
      height: {
        '128': '62rem',
      },    
      colors: {
        lightblack:'#141518',
        bluegrey: '#171E28',
        bluegrey2: '#1D2530',
        lightbluegrey: '#252E37',
        activelightbluegrey: '#7C8898',

        LORANGE:'#FC7613'
      }
    },
  },
  plugins: [],
}

