import FloatingHearts from "./FloatingHearts";
import Sparkles from "./Sparkles";
import { COLORS } from "../constants";

export const PageShell = ({ children }: { children: React.ReactNode }) => (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-proposal-blush via-proposal-pink to-proposal-rose relative overflow-hidden">
        <FloatingHearts />
        <Sparkles />
        {children}
    </div>
);

export const Footer = () => (
    <footer
        className="mt-8 pb-4 text-sm z-10"
        style={{ color: COLORS.muted }}
    >
        Made with love by Juwel ❤️
    </footer>
);
