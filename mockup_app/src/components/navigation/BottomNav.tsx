import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { TabContext } from "../../contexts/TabContext";

export function BottomNav() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const { setActiveTab } = React.useContext(TabContext);

    const goHome = () => {
        navigation.navigate("Home");
        setActiveTab('Summary');
    };

    return (
        <gridLayout rows="auto" columns="*, *, *, *, *" className="p-4 bg-white border-t">
            <stackLayout col={0} className="text-center" onTap={goHome}>
                <label className="text-2xl text-center">🏠</label>
                <label className="text-xs text-center">Home</label>
            </stackLayout>
            
            <stackLayout col={1} className="text-center">
                <label className="text-2xl text-center">📝</label>
                <label className="text-xs text-center">Apply</label>
            </stackLayout>
            
            <stackLayout col={2} className="text-center" onTap={() => navigation.navigate("Payments")}>
                <label className="text-2xl text-center">💸</label>
                <label className="text-xs text-center">Payments</label>
            </stackLayout>
            
            <stackLayout col={3} className="text-center">
                <label className="text-2xl text-center">🔍</label>
                <label className="text-xs text-center">Search</label>
            </stackLayout>
            
            <stackLayout col={4} className="text-center" onTap={() => navigation.navigate("CardManagement")}>
                <label className="text-2xl text-center">💳</label>
                <label className="text-xs text-center">Card</label>
            </stackLayout>
        </gridLayout>
    );
}