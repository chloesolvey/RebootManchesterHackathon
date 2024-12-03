import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function OpenBankingServicesScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    
    const connectedServices = [
        { name: "Money Manager", type: "Budgeting", lastUsed: "Today" },
        { name: "Credit Karma", type: "Credit Score", lastUsed: "Yesterday" },
        { name: "Xero", type: "Accounting", lastUsed: "3 days ago" },
        { name: "Emma", type: "Financial Assistant", lastUsed: "1 week ago" }
    ];

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Connected Services</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <button className="bg-black text-white font-bold p-4 rounded-lg mb-4">
                        Connect New Service
                    </button>

                    <label className="text-lg font-bold text-black mb-4">Active Connections</label>

                    {connectedServices.map((service, index) => (
                        <stackLayout key={index} className="bg-white rounded-lg p-4 mb-4">
                            <gridLayout columns="*, auto">
                                <stackLayout col={0}>
                                    <label className="text-black font-bold">{service.name}</label>
                                    <label className="text-sm text-gray-500">{service.type}</label>
                                    <label className="text-xs text-gray-500">Last used: {service.lastUsed}</label>
                                </stackLayout>
                                <button col={1} className="text-red-500">Revoke Access</button>
                            </gridLayout>
                        </stackLayout>
                    ))}

                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">About Connected Services</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            These third-party services have secure access to your banking data through Open Banking.
                        </label>
                        <label className="text-sm text-gray-500" textWrap={true}>
                            You can revoke access at any time. Services will need to request access again.
                        </label>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}