import * as React from "react";

interface AlphabetDividerProps {
    letter: string;
}

export function AlphabetDivider({ letter }: AlphabetDividerProps) {
    return (
        <gridLayout className="bg-gray-100 p-2">
            <label className="text-black font-bold">{letter}</label>
        </gridLayout>
    );
}