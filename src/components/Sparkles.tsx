const Sparkles = () => {
    const sparkles = Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${2 + Math.random() * 3}s`,
        char: ["✦", "·", "⋆", "✧"][i % 4],
    }));

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {sparkles.map((s) => (
                <span
                    key={s.id}
                    className="absolute animate-sparkle"
                    style={{
                        left: s.left,
                        top: s.top,
                        animationDelay: s.delay,
                        animationDuration: s.duration,
                        fontSize: "10px",
                        color: "hsl(340, 70%, 65%)",
                    }}
                >
                    {s.char}
                </span>
            ))}
        </div>
    );
};

export default Sparkles;
