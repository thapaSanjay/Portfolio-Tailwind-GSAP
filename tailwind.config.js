/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'body-bg': "url('assets/img/body-bg.jpg')",
      },
      colors: {
       accent: '#80db66',
       primary: '#25262f',
       secondary: '#e2ecf6',
       text: '#9b9db1',
       sectionbg: '#e2ecf6',
       border: '#bcc7d3',
       heading: '#2e2e37',
      },
      animation: {
        heartbeat: 'heartbeat-middle 5s infinite alternate',
        zoomAnimation: 'zoomanimation 4s infinite alternate',
        rotation: 'rotation 10s infinite linear',
        marquee1 : 'marquee1 20s linear infinite',
        marquee2 : 'marquee2 20s linear infinite',
      },
      keyframes: {
        zoomanimation: {
          '0%': { transform: 'scale(0.7)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.7)' },
        },
        rotation: {
          '0%' : {transform: 'rotate(0deg)'},
          '100%' : {transform: 'rotate(360deg)'},
        },
        marquee1 : {
          '0%' : {transform: 'translate(0, 0)'},
          '100%' : {transform: 'translate(-100%, 0)'},
        },
        marquee2 : {
          '0%' : {transform: 'translate(-100%, 0)'},
          '100%' : {transform: 'translate(0, 0)'},
        }

      },

    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      Opensans: ["Open Sans", "sans-serif"]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        md: '30px',
      },
    },

  },
  plugins: [],
}