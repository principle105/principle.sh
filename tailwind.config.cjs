/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
    theme: {
        extend: {
            colors: {
                main: "#23252f",
                main_light: "#292a35",
                border_main: "#202129",
                highlight: "#323644",
                comment: "#6572a0",
                purple: "#bd93f9",
                cyan: "#8be9fd",
                green: "#50fa7b",
                red: "#ff5555",
            },
            fontFamily: {
                poppins: ["Poppins", "monospace"],
            },
            transformOrigin: {
                test: "100% calc(100% - 14rem)",
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
