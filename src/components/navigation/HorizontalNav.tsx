import * as React from "react";

interface HorizontalNavProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export function HorizontalNav({ activeTab, onTabChange }: HorizontalNavProps) {
    const tabs = ['Summary', 'Everyday', 'Save & Invest', 'Borrow', 'Insure'];

    return (
        <scrollView orientation="horizontal" className="px-2">
            <stackLayout orientation="horizontal">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`mx-1 px-3 py-1 text-xs rounded-lg border border-black font-bold ${
                            activeTab === tab 
                                ? 'bg-black text-white' 
                                : 'bg-gray-100 text-black'
                        }`}
                        onTap={() => onTabChange(tab)}
                        text={tab}
                    />
                ))}
            </stackLayout>
        </scrollView>
    );
}