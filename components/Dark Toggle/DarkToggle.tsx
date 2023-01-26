import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";

function DarkToggle() {

    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme, theme } = useTheme();

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    return (
        <div className='fixed bottom-10 left-16 z-20'>
            <div className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
                resolvedTheme === "dark" ? "justify-end" : "justify-start"
            }`}
                 onClick={() =>setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >

                <span className="absolute left-0">🌜</span>
                <div
                    className="w-5 h-5 bg-white rounded-full z-40"
                />

                <span className="absolute right-0.5">🌞</span>
            </div>
        </div>
    );
}

export default DarkToggle;