/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
    theme: {
        extend: {
            colors: {
                main: "#23252f",
                main_light: "#292a35",

                purple: "#bd93f9",
                cyan: "#8be9fd",
                green: "#50fa7b",
                red: "#ff5555",
            },
            fontFamily: {
                poppins: ["Poppins", "monospace"],
            },
            keyframes: {
                wheel: {
                    to: {
                        opacity: 0,
                        top: "2.5rem",
                    },
                },
            },
            animation: {
                wheel: "wheel 1.75s ease-out infinite",
            },
        },
    },
    plugins: [],
};
