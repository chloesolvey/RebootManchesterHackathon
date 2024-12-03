import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { BottomNav } from "../navigation/BottomNav";

export function CardManagementScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();

    return (
        <gridLayout rows="auto, *, auto" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="auto, *, auto, auto" className="p-4 bg-white border-b">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold ml-2">Card Management</label>
                <button 
                    col={2} 
                    className="text-lg mx-1 bg-gray-100 w-10 h-10 text-center"
                    onTap={() => navigation.navigate("Support")}
                >❓</button>
                <button 
                    col={3} 
                    className="text-lg bg-gray-100 w-10 h-10 text-center"
                    onTap={() => navigation.navigate("Settings")}
                >⚙️</button>
            </gridLayout>

            {/* Rest of the content remains the same */}
            <scrollView row={1}>
                <stackLayout className="p-4">
                    <label className="text-lg font-bold mb-4">Card Details</label>
                    <stackLayout className="bg-white rounded-lg mb-6">
                        <gridLayout columns="auto, *, auto" className="p-4 border-b">
                            <label col={0} className="text-xl mr-2">👁️</label>
                            <label col={1} className="text-base">View PIN</label>
                            <label col={2} className="text-xl">›</label>
                        </gridLayout>
                        <gridLayout columns="auto, *, auto" className="p-4">
                            <label col={0} className="text-xl mr-2">💳</label>
                            <label col={1} className="text-base">View card details</label>
                            <label col={2} className="text-xl">›</label>
                        </gridLayout>
                    </stackLayout>

                    <label className="text-lg font-bold mb-4">Card Controls</label>
                    <stackLayout className="bg-white rounded-lg mb-6">
                        <gridLayout columns="auto, *, auto" className="p-4 border-b">
                            <label col={0} className="text-xl mr-2">🔒</label>
                            <label col={1} className="text-base">Card freezes and limits</label>
                            <label col={2} className="text-xl">›</label>
                        </gridLayout>
                        <gridLayout columns="auto, *, auto" className="p-4 border-b">
                            <label col={0} className="text-xl mr-2">⚠️</label>
                            <label col={1} className="text-base">Lost or stolen cards</label>
                            <label col={2} className="text-xl">›</label>
                        </gridLayout>
                        <gridLayout columns="auto, *, auto" className="p-4">
                            <label col={0} className="text-xl mr-2">🔄</label>
                            <label col={1} className="text-base">Replace card & PIN</label>
                            <label col={2} className="text-xl">›</label>
                        </gridLayout>
                    </stackLayout>

                    <label className="text-lg font-bold mb-4">Spending Options</label>
                    <stackLayout className="bg-white rounded-lg mb-6">
                        <gridLayout columns="auto, *, auto" className="p-4 border-b">
                            <label col={0} className="text-xl mr-2">📱</label>
                            <label col={1} className="text-base">Google Pay</label>
                            <label col={2} className="text-xl">›</label>
                        </gridLayout>
                        <gridLayout columns="auto, *, auto" className="p-4 border-b">
                            <label col={0} className="text-xl mr-2">🔵</label>
                            <label col={1} className="text-base">Click to pay</label>
                            <label col={2} className="text-xl">›</label>
                        </gridLayout>
                        <gridLayout columns="auto, *, auto" className="p-4">
                            <label col={0} className="text-xl mr-2">⭐</label>
                            <label col={1} className="text-base">Loyalty Plus</label>
                            <label col={2} className="text-xl">›</label>
                        </gridLayout>
                    </stackLayout>
                </stackLayout>
            </scrollView>

            <contentView row={2}>
                <BottomNav />
            </contentView>
        </gridLayout>
    );
}