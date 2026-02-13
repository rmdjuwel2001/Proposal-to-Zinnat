/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "proposal-blush": "#fff0f5",
                "proposal-pink": "#ffe4ef",
                "proposal-rose": "#ffd6e7",
            },
            keyframes: {
                "float-heart": {
                    "0%": { transform: "translateY(0) rotate(0deg)", opacity: "0" },
                    "10%": { opacity: "1" },
                    "90%": { opacity: "1" },
                    "100%": { transform: "translateY(-100vh) rotate(720deg)", opacity: "0" },
                },
                sparkle: {
                    "0%, 100%": { opacity: "0", transform: "scale(0)" },
                    "50%": { opacity: "1", transform: "scale(1)" },
                },
                heartbeat: {
                    "0%, 100%": { transform: "scale(1)" },
                    "15%": { transform: "scale(1.15)" },
                    "30%": { transform: "scale(1)" },
                    "45%": { transform: "scale(1.1)" },
                },
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "zoom-in": {
                    "0%": { opacity: "0", transform: "scale(0.5)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                "ring-bounce": {
                    "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
                    "25%": { transform: "translateY(-20px) rotate(-10deg)" },
                    "50%": { transform: "translateY(0) rotate(0deg)" },
                    "75%": { transform: "translateY(-10px) rotate(10deg)" },
                },
                "glow-pulse": {
                    "0%, 100%": { boxShadow: "0 0 35px hsla(340,82%,52%,0.5), 0 0 80px hsla(340,82%,52%,0.2)" },
                    "50%": { boxShadow: "0 0 50px hsla(340,82%,52%,0.7), 0 0 100px hsla(340,82%,52%,0.35)" },
                },
                "bounce-in": {
                    "0%": { opacity: "0", transform: "scale(0.3)" },
                    "50%": { opacity: "1", transform: "scale(1.05)" },
                    "70%": { transform: "scale(0.9)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
            },
            animation: {
                "float-heart": "float-heart var(--tw-duration, 8s) linear infinite",
                sparkle: "sparkle var(--tw-duration, 3s) ease-in-out infinite",
                heartbeat: "heartbeat 1.5s ease-in-out infinite",
                "fade-in-up": "fade-in-up 0.8s ease-out forwards",
                "zoom-in": "zoom-in 0.6s ease-out forwards",
                "ring-bounce": "ring-bounce 2s ease-in-out infinite",
                "glow-pulse": "glow-pulse 2s ease-in-out infinite",
                "bounce-in": "bounce-in 0.5s ease-out forwards",
            },
        },
    },
    plugins: [],
};
