import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function NotificationSettingsScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const [settings, setSettings] = React.useState({
        transactions: true,
        balanceAlerts: true,
        security: true,
        marketing: false,
        statements: true
    });

    const toggleSetting = (key: keyof typeof settings) => {
        setSettings(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Notifications</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <stackLayout className="bg-white rounded-lg p-4 mb-4">
                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Transaction Alerts</label>
                                <label className="text-sm text-gray-500">Get notified about your transactions</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${settings.transactions ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleSetting('transactions')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Balance Alerts</label>
                                <label className="text-sm text-gray-500">Get notified about low balances</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${settings.balanceAlerts ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleSetting('balanceAlerts')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Security Alerts</label>
                                <label className="text-sm text-gray-500">Important security notifications</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${settings.security ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleSetting('security')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Marketing</label>
                                <label className="text-sm text-gray-500">Receive offers and updates</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${settings.marketing ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleSetting('marketing')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Statement Notifications</label>
                                <label className="text-sm text-gray-500">Get notified when statements are ready</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${settings.statements ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleSetting('statements')}
                            />
                        </gridLayout>
                    </stackLayout>

                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">About Notifications</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • Some notifications cannot be disabled for security reasons
                        </label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • Make sure notifications are enabled in your device settings
                        </label>
                        <label className="text-sm text-gray-500" textWrap={true}>
                            • You can change these settings at any time
                        </label>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}