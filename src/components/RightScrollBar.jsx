import { useState, useEffect } from "react";

export default function RightScrollBar() {
    const [top, setTop] = useState(25); // starting position (%)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 50; // moves max 50% down
            setTop(25 + scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed right-2 w-1 h-16 z-50 bg-yellow-500 rounded-full shadow-[0_0_8px_#f7ab0a]"
            style={{ top: `${top}%` }}
        ></div>
    );
}
