import * as React from "react";

type TabContextType = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

export const TabContext = React.createContext<TabContextType>({
    activeTab: 'Summary',
    setActiveTab: () => {},
});

export function TabProvider({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = React.useState('Summary');

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabContext.Provider>
    );
}