import { useState, useEffect } from "react";
import { COLORS } from "../constants";

const TypewriterHeading = () => {
    const text = "Zinnat, Will You Marry Me?";
    const [displayed, setDisplayed] = useState(0);

    useEffect(() => {
        if (displayed < text.length) {
            const t = setTimeout(() => setDisplayed((d) => d + 1), 80);
            return () => clearTimeout(t);
        }
    }, [displayed, text.length]);

    return (
        <h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 text-center drop-shadow-lg"
            style={{
                fontFamily: "'Great Vibes', cursive",
                color: COLORS.heading,
                minHeight: "1.2em",
            }}
        >
            {text.slice(0, displayed)}
            {displayed < text.length && (
                <span className="animate-pulse">|</span>
            )}
        </h1>
    );
};

export default TypewriterHeading;
