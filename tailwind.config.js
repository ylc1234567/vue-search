/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'transparent-black-25': 'rgba(0, 0, 0, 0.25)',
                'bienici-yellow': 'rgb(251, 186, 32)',
                'bienici-blue': 'rgb(0, 157, 176)',
            },
            minWidth: {
                'min-mobile': '540px',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            cursor: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
