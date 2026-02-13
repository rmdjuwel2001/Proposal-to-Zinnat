import confetti from "canvas-confetti";
import { CONFETTI_COLORS } from "../constants";

export const fireConfetti = (duration = 5000) => {
    const end = Date.now() + duration;
    const frame = () => {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 65,
            origin: { x: 0 },
            colors: CONFETTI_COLORS,
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 65,
            origin: { x: 1 },
            colors: CONFETTI_COLORS,
        });
        if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
};
