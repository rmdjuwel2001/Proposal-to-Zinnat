import { useState, useCallback } from "react";
import { FUNNY_MESSAGES, AUDIO_URL } from "../constants";
import { useBackgroundAudio } from "../hooks/useBackgroundAudio";
import { fireConfetti } from "../utils/confetti";
import CelebrationScreen from "../components/CelebrationScreen";
import ProposalScreen from "../components/ProposalScreen";

const Index = () => {
    /* ── State ── */
    const [accepted, setAccepted] = useState(false);
    const [noPos, setNoPos] = useState<{ top?: string; left?: string }>({});
    const [noMsg, setNoMsg] = useState("");
    const [msgIdx, setMsgIdx] = useState(0);
    const [noCount, setNoCount] = useState(0);

    /* ── Audio ── */
    const { muted, toggleMute, setVolume, play } =
        useBackgroundAudio(AUDIO_URL);

    /* ── Handlers ── */
    const handleYes = useCallback(() => {
        setAccepted(true);
        setVolume(0.6);
        play();
        fireConfetti(5000);
    }, [setVolume, play]);

    const escapeNo = useCallback(() => {
        // Swing dramatically from one side to the other
        const isEven = msgIdx % 2 === 0;
        // Alternate between left zone (5-25%) and right zone (65-90%)
        const left = isEven
            ? `${65 + Math.random() * 25}%`   // right side
            : `${5 + Math.random() * 20}%`;    // left side
        // Random vertical position across most of the screen
        const top = `${10 + Math.random() * 70}%`;

        setNoPos({ top, left });
        setNoMsg(FUNNY_MESSAGES[msgIdx % FUNNY_MESSAGES.length]);
        setMsgIdx((i) => i + 1);
        setNoCount((c) => c + 1);
    }, [msgIdx]);

    /* ── Render ── */
    if (accepted) {
        return <CelebrationScreen muted={muted} toggleMute={toggleMute} />;
    }

    return (
        <ProposalScreen
            muted={muted}
            toggleMute={toggleMute}
            onYes={handleYes}
            noPos={noPos}
            noMsg={noMsg}
            msgIdx={msgIdx}
            noCount={noCount}
            escapeNo={escapeNo}
        />
    );
};

export default Index;
