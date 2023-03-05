/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
    theme: {
        extend: {
            colors: {
                bg: "#23252f",
                main: "#292a35",
                highlight: "#323644",
                highlight_light: "#414354",
                purple: "#bd93f9",
                cyan: "#8be9fd",
                green: "#50fa7b",
                red: "#ff5555",
            },
            fontFamily: {
                poppins: ["Poppins", "monospace"],
            },
        },
    },
    plugins: [],
};
