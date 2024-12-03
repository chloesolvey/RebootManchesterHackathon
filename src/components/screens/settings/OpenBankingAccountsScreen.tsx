import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function OpenBankingAccountsScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    
    const connectedAccounts = [
        { bank: "Barclays", accountType: "Current Account", lastSync: "Today" },
        { bank: "HSBC", accountType: "Savings Account", lastSync: "Yesterday" },
        { bank: "Nationwide", accountType: "Current Account", lastSync: "2 days ago" }
    ];

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Connected Accounts</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <button className="bg-black text-white font-bold p-4 rounded-lg mb-4">
                        Connect New Account
                    </button>

                    <label className="text-lg font-bold text-black mb-4">Connected Banks</label>

                    {connectedAccounts.map((account, index) => (
                        <stackLayout key={index} className="bg-white rounded-lg p-4 mb-4">
                            <gridLayout columns="*, auto">
                                <stackLayout col={0}>
                                    <label className="text-black font-bold">{account.bank}</label>
                                    <label className="text-sm text-gray-500">{account.accountType}</label>
                                    <label className="text-xs text-gray-500">Last synced: {account.lastSync}</label>
                                </stackLayout>
                                <button col={1} className="text-red-500">Disconnect</button>
                            </gridLayout>
                        </stackLayout>
                    ))}

                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">About Open Banking</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            Open Banking lets you securely share your financial information with other banks and services.
                        </label>
                        <label className="text-sm text-gray-500" textWrap={true}>
                            Your data is protected and you can revoke access at any time.
                        </label>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}