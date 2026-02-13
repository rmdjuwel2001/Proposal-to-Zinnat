import MuteButton from "./MuteButton";
import { PageShell, Footer } from "./PageShell";
import { COLORS } from "../constants";

interface CelebrationScreenProps {
    muted: boolean;
    toggleMute: () => void;
}

const CelebrationScreen = ({ muted, toggleMute }: CelebrationScreenProps) => (
    <PageShell>
        <MuteButton muted={muted} toggle={toggleMute} />
        <div className="z-10 text-center animate-zoom-in px-4 max-w-xl">
            <div className="text-7xl sm:text-9xl mb-6 animate-ring-bounce">
                💍
            </div>
            <h1
                className="text-3xl sm:text-5xl font-bold mb-3"
                style={{
                    fontFamily: "'Great Vibes', cursive",
                    color: COLORS.heading,
                }}
            >
                You just made me the happiest person alive!
            </h1>
            <p
                className="text-lg sm:text-xl mb-2 font-medium"
                style={{
                    fontFamily: "'Great Vibes', cursive",
                    color: COLORS.accent,
                    fontSize: "1.6rem",
                }}
            >
                Our Forever Begins Now ✨
            </p>
            <p
                className="text-xl sm:text-2xl"
                style={{ color: COLORS.subtle }}
            >
                💍❤️ Forever & Always ❤️💍
            </p>
            <div className="mt-8 flex justify-center gap-3">
                {["✨", "💖", "🌹", "💕", "💗", "✨"].map((e, i) => (
                    <span
                        key={i}
                        className="text-3xl animate-sparkle"
                        style={{ animationDelay: `${i * 0.4}s` }}
                    >
                        {e}
                    </span>
                ))}
            </div>
        </div>
        <Footer />
    </PageShell>
);

export default CelebrationScreen;
