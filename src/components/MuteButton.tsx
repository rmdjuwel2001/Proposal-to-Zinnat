import { COLORS } from "../constants";

interface MuteButtonProps {
    muted: boolean;
    toggle: () => void;
}

const MuteButton = ({ muted, toggle }: MuteButtonProps) => (
    <button
        onClick={toggle}
        className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-md transition-all hover:scale-110"
        style={{
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(8px)",
            color: COLORS.subtle,
        }}
        aria-label={muted ? "Unmute" : "Mute"}
    >
        {muted ? "🔇" : "🔊"}
    </button>
);

export default MuteButton;
