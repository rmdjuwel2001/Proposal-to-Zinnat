import { useState, useRef, useCallback, useEffect } from "react";

export const useBackgroundAudio = (url: string, initialVolume = 0.3) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const audio = new Audio(url);
        audio.loop = true;
        audio.volume = initialVolume;
        audioRef.current = audio;
        return () => {
            audio.pause();
        };
    }, [url, initialVolume]);

    const toggleMute = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        if (muted) {
            audio.play().catch(() => { });
            setMuted(false);
        } else {
            audio.pause();
            setMuted(true);
        }
    }, [muted]);

    const setVolume = useCallback((v: number) => {
        if (audioRef.current) audioRef.current.volume = v;
    }, []);

    const play = useCallback(() => {
        audioRef.current?.play().catch(() => { });
        setMuted(false);
    }, []);

    return { muted, toggleMute, setVolume, play };
};
