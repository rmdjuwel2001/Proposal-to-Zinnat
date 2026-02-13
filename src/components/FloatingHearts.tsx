const FloatingHearts = () => {
    const items = Array.from({ length: 22 }, (_, i) => ({
        id: i,
        emoji: ["💗", "🌹", "💕", "✨", "🩷"][i % 5],
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`,
        duration: `${7 + Math.random() * 9}s`,
        size: `${14 + Math.random() * 22}px`,
        opacity: 0.15 + Math.random() * 0.3,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {items.map((h) => (
                <span
                    key={h.id}
                    className="absolute animate-float-heart"
                    style={{
                        left: h.left,
                        bottom: "-40px",
                        animationDelay: h.delay,
                        animationDuration: h.duration,
                        fontSize: h.size,
                        opacity: h.opacity,
                    }}
                >
                    {h.emoji}
                </span>
            ))}
        </div>
    );
};

export default FloatingHearts;
