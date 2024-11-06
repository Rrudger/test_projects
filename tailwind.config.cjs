/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
              primary: '#022C22',
              secondary: '#c4ced6',
              dark: '#191919',
              green: '#BEF264',
              light: '#EEEEEE',
              grey: '#D9D9D9',
              bc_primary: '#3f4341',
              bc_secondary: '#fed76b',
              bc_tertiary: '#f6f6f6',
              cc_primary: '#06255B',
              cc_secondary: '#DA5D24',
              cc_secondary_hover: '#BA4E1D',
              cc_grey: '#ABB5C7',
              cc_black: '#313131',

            },
            fontFamily: {
              afacad: ['"Afacad Flux"', "sans-serif"],
              poppins: ["Poppins", "sans-serif"],
              montserrat: ["Montserrat", "sans-serif"],
              source: ['"Source Sans 3"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
