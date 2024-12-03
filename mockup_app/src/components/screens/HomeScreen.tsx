import * as React from "react";
import { Header } from "../header/Header";
import { NotificationBar } from "../notifications/NotificationBar";
import { AccountBalance } from "../account/AccountBalance";
import { SpacesGrid } from "../spaces/SpacesGrid";
import { BottomNav } from "../navigation/BottomNav";
import { HorizontalNav } from "../navigation/HorizontalNav";
import { EverydayView } from "../everyday/EverydayView";
import { SaveInvestView } from "../saveinvest/SaveInvestView";
import { TabContext } from "../../contexts/TabContext";

export function HomeScreen() {
    const { activeTab, setActiveTab } = React.useContext(TabContext);

    return (
        <gridLayout rows="auto, *, auto" className="bg-gray-100">
            {/* Fixed Header */}
            <stackLayout row={0}>
                <Header />
                <HorizontalNav activeTab={activeTab} onTabChange={setActiveTab} />
                <NotificationBar />
            </stackLayout>

            {/* Scrollable Content */}
            <contentView row={1}>
                {activeTab === 'Summary' ? (
                    <scrollView>
                        <stackLayout>
                            <AccountBalance />
                            <SpacesGrid />
                        </stackLayout>
                    </scrollView>
                ) : activeTab === 'Everyday' ? (
                    <EverydayView />
                ) : activeTab === 'Save & Invest' ? (
                    <SaveInvestView />
                ) : (
                    <label className="text-center p-4">Coming soon...</label>
                )}
            </contentView>

            {/* Fixed Footer */}
            <contentView row={2}>
                <BottomNav />
            </contentView>
        </gridLayout>
    );
}