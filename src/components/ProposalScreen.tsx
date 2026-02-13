import MuteButton from "./MuteButton";
import TypewriterHeading from "./TypewriterHeading";
import { PageShell, Footer } from "./PageShell";
import { COLORS, GLASS, SAD_FACES } from "../constants";

interface ProposalScreenProps {
    muted: boolean;
    toggleMute: () => void;
    onYes: () => void;
    noPos: { top?: string; left?: string };
    noMsg: string;
    msgIdx: number;
    noCount: number;
    escapeNo: () => void;
}

const ProposalScreen = ({
    muted,
    toggleMute,
    onYes,
    noPos,
    noMsg,
    msgIdx,
    noCount,
    escapeNo,
}: ProposalScreenProps) => {
    const showSadFace = noCount > 0;
    const faceIdx = (noCount - 1) % SAD_FACES.length;
    const currentFace = SAD_FACES[faceIdx];

    return (
        <PageShell>
            <MuteButton muted={muted} toggle={toggleMute} />

            <main className="z-10 flex flex-col items-center px-4 w-full max-w-xl">
                {/* Emotional Display */}
                <div className="h-20 sm:h-24 mb-3 flex items-center justify-center">
                    {!showSadFace ? (
                        <div
                            className="text-5xl sm:text-6xl animate-heartbeat"
                            style={{ animationDuration: "1.5s" }}
                        >
                            💖
                        </div>
                    ) : (
                        <div key={noCount} className="flex flex-col items-center animate-bounce-in">
                            <span className="text-5xl sm:text-7xl">{currentFace.emoji}</span>
                            <p
                                className="text-sm sm:text-base font-medium italic mt-1"
                                style={{
                                    color: COLORS.accent,
                                    fontFamily: "'Lora', serif",
                                }}
                            >
                                {currentFace.text}
                            </p>
                        </div>
                    )}
                </div>

                {/* Typewriter heading */}
                <div
                    style={{ animationDelay: "0.3s" }}
                    className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
                >
                    <TypewriterHeading />
                </div>

                {/* Glassmorphism card */}
                <div
                    className="rounded-2xl p-5 sm:p-7 mb-5 mt-3 w-full text-center shadow-2xl border animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
                    style={{ ...GLASS, animationDelay: "0.8s" }}
                >
                    <p
                        className="text-base sm:text-lg leading-relaxed italic"
                        style={{
                            color: COLORS.body,
                            fontFamily: "'Lora', serif",
                        }}
                    >
                        "From the moment you came into my life, everything changed.
                        You are my peace, my happiness, my forever. Today, I am
                        asking you the most important question of my life…"
                    </p>
                </div>

                {/* Yes / No buttons */}
                <div
                    className="flex gap-5 items-center relative animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
                    style={{ animationDelay: "1.4s" }}
                >
                    <button
                        onClick={onYes}
                        className="shimmer-btn px-10 py-4 rounded-full text-xl font-bold text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-glow-pulse"
                        style={{
                            background:
                                "linear-gradient(135deg, hsl(340,82%,52%), hsl(330,90%,58%))",
                            boxShadow:
                                "0 0 35px hsla(340,82%,52%,0.5), 0 0 80px hsla(340,82%,52%,0.2)",
                            letterSpacing: "1px",
                        }}
                    >
                        YES 💖
                    </button>

                    <div className="relative">
                        <button
                            onMouseEnter={escapeNo}
                            onTouchStart={(e) => {
                                e.preventDefault();
                                escapeNo();
                            }}
                            className="px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out border-2 shadow-lg"
                            style={{
                                position: noPos.top ? "fixed" : "relative",
                                top: noPos.top,
                                left: noPos.left,
                                zIndex: 50,
                                background: "rgba(255,255,255,0.8)",
                                borderColor: COLORS.noBorder,
                                color: COLORS.noBtn,
                                transform: `rotate(${noCount * 5}deg)`,
                            }}
                        >
                            NO 😢
                        </button>
                    </div>
                </div>

                {/* Funny message badge */}
                {noMsg && (
                    <div
                        key={msgIdx}
                        className="fixed z-[60] animate-bounce-in pointer-events-none"
                        style={{
                            top: noPos.top
                                ? `calc(${noPos.top} - 50px)`
                                : "40%",
                            left: noPos.top ? noPos.left : "50%",
                            transform: noPos.top ? "none" : "translateX(-50%)",
                        }}
                    >
                        <div
                            className="px-4 py-2 rounded-full text-base font-bold shadow-lg whitespace-nowrap"
                            style={{
                                background: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(12px)",
                                color: COLORS.badge,
                                textShadow:
                                    "0 1px 4px rgba(236, 72, 153, 0.3)",
                                boxShadow:
                                    "0 4px 20px rgba(236, 72, 153, 0.25), 0 0 0 1px rgba(236, 72, 153, 0.15)",
                            }}
                        >
                            {noMsg}
                        </div>
                    </div>
                )}

                {/* Escape counter */}
                {noCount >= 3 && (
                    <p
                        className="mt-3 text-sm sm:text-base font-semibold animate-bounce-in z-10"
                        style={{ color: COLORS.counter }}
                    >
                        You've said NO {noCount} times... my heart is breaking! 💔
                    </p>
                )}
            </main>

            <Footer />
        </PageShell>
    );
};

export default ProposalScreen;
