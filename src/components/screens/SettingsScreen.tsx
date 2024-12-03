import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { BottomNav } from "../navigation/BottomNav";

export function SettingsScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const [activeTab, setActiveTab] = React.useState<'profile' | 'settings'>('profile');

    const renderProfileContent = () => (
        <stackLayout className="p-4">
            {/* Your Details Section */}
            <label className="text-lg font-bold text-black mb-4">Your details</label>

            {/* Name and Title */}
            <stackLayout className="bg-white p-4 rounded-lg mb-2">
                <label className="text-gray-600">Name and title:</label>
                <label className="font-bold text-black">Lloyds User</label>
            </stackLayout>

            {/* UserID */}
            <stackLayout className="bg-white p-4 rounded-lg mb-2">
                <label className="text-gray-600">UserID:</label>
                <label className="font-bold text-black">User12345</label>
            </stackLayout>

            {/* Phone Numbers */}
            <gridLayout columns="*, auto" className="bg-white p-4 rounded-lg mb-2">
                <stackLayout col={0}>
                    <gridLayout columns="auto, *" className="mb-2">
                        <label col={0} className="text-gray-600 mr-2">Mobile:</label>
                        <label col={1} className="text-black">+44 1234 567 7890</label>
                    </gridLayout>
                    <gridLayout columns="auto, *" className="mb-2">
                        <label col={0} className="text-gray-600 mr-2">Home:</label>
                        <label col={1} className="text-blue-500">Add phone number</label>
                    </gridLayout>
                    <gridLayout columns="auto, *">
                        <label col={0} className="text-gray-600 mr-2">Work:</label>
                        <label col={1} className="text-blue-500">Add phone number</label>
                    </gridLayout>
                </stackLayout>
                <label col={1} className="text-xl self-center">›</label>
            </gridLayout>

            {/* Address */}
            <gridLayout columns="*, auto" className="bg-white p-4 rounded-lg mb-2">
                <stackLayout col={0}>
                    <label className="text-gray-600">Address:</label>
                    <label className="font-bold text-black mt-1">125 London Wall</label>
                    <label className="font-bold text-black">London</label>
                    <label className="text-gray-600 mt-2">Postcode:</label>
                    <label className="font-bold text-black mt-1">E1 7BJ</label>
                </stackLayout>
                <label col={1} className="text-xl self-center">›</label>
            </gridLayout>

            {/* Email */}
            <gridLayout columns="*, auto" className="bg-white p-4 rounded-lg mb-2">
                <stackLayout col={0}>
                    <label className="text-gray-600">Email:</label>
                    <label className="font-bold text-black mt-1">loyalcustomer@faviemail.com</label>
                </stackLayout>
                <label col={1} className="text-xl self-center">›</label>
            </gridLayout>

            {/* Income and Expenses */}
            <gridLayout columns="*, auto" className="bg-white p-4 rounded-lg mb-4">
                <label col={0} className="text-black">Income and expenses:</label>
                <label col={1} className="text-xl">›</label>
            </gridLayout>

            {/* Log Off Button */}
            <button className="bg-black text-white p-4 rounded-lg">Log off</button>
        </stackLayout>
    );

    const renderSettingsContent = () => (
        <stackLayout className="p-4">
            {/* App Security Section */}
            <label className="text-lg font-bold text-black mb-4">App security</label>
            <stackLayout className="bg-white rounded-lg mb-6">
                <gridLayout columns="auto, *, auto" className="p-4 border-b" onTap={() => navigation.navigate('FingerprintLogin')}>
                    <label col={0} className="text-xl mr-2">👆</label>
                    <label col={1} className="text-black">Fingerprint logon</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
                <gridLayout columns="auto, *, auto" className="p-4 border-b" onTap={() => navigation.navigate('ResetPassword')}>
                    <label col={0} className="text-xl mr-2">🔑</label>
                    <label col={1} className="text-black">Reset your password</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
                <gridLayout columns="auto, *, auto" className="p-4 border-b" onTap={() => navigation.navigate('AutoLogoff')}>
                    <label col={0} className="text-xl mr-2">⏲️</label>
                    <label col={1} className="text-black">Auto logoff</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
                <gridLayout columns="auto, *, auto" className="p-4" onTap={() => navigation.navigate('ResetApp')}>
                    <label col={0} className="text-xl mr-2">🔄</label>
                    <label col={1} className="text-black">Reset mobile app</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
            </stackLayout>

            {/* How we contact you Section */}
            <label className="text-lg font-bold text-black mb-4">How we contact you</label>
            <stackLayout className="bg-white rounded-lg mb-6">
                <gridLayout columns="auto, *, auto" className="p-4 border-b" onTap={() => navigation.navigate('NotificationSettings')}>
                    <label col={0} className="text-xl mr-2">🔔</label>
                    <label col={1} className="text-black">Notifications</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
                <gridLayout columns="auto, *, auto" className="p-4 border-b" onTap={() => navigation.navigate('PaperFreePreferences')}>
                    <label col={0} className="text-xl mr-2">📱</label>
                    <label col={1} className="text-black">Paper free preferences</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
                <gridLayout columns="auto, *, auto" className="p-4 border-b" onTap={() => navigation.navigate('StatementFrequency')}>
                    <label col={0} className="text-xl mr-2">📊</label>
                    <label col={1} className="text-black">Statement frequency</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
                <gridLayout columns="auto, *, auto" className="p-4" onTap={() => navigation.navigate('AccessibilityOptions')}>
                    <label col={0} className="text-xl mr-2">♿</label>
                    <label col={1} className="text-black">Accessibility options</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
            </stackLayout>

            {/* Other feature settings Section */}
            <label className="text-lg font-bold text-black mb-4">Other feature settings</label>
            <stackLayout className="bg-white rounded-lg mb-6">
                <gridLayout columns="auto, *, auto" className="p-4" onTap={() => navigation.navigate('OpenBankingAccounts')}>
                    <label col={0} className="text-xl mr-2">🔗</label>
                    <label col={1} className="text-black">Open Banking connected accounts</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
            </stackLayout>

            {/* Privacy and data Section */}
            <label className="text-lg font-bold text-black mb-4">Privacy and data</label>
            <stackLayout className="bg-white rounded-lg mb-6">
                <gridLayout columns="auto, *, auto" className="p-4 border-b" onTap={() => navigation.navigate('AppDetails')}>
                    <label col={0} className="text-xl mr-2">📱</label>
                    <label col={1} className="text-black">App details</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
                <gridLayout columns="auto, *, auto" className="p-4 border-b" onTap={() => navigation.navigate('MarketingChoices')}>
                    <label col={0} className="text-xl mr-2">📢</label>
                    <label col={1} className="text-black">Marketing choices</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
                <gridLayout columns="auto, *, auto" className="p-4 border-b" onTap={() => navigation.navigate('DataConsent')}>
                    <label col={0} className="text-xl mr-2">🔒</label>
                    <label col={1} className="text-black">Data consent</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
                <gridLayout columns="auto, *, auto" className="p-4 border-b" onTap={() => navigation.navigate('OpenBankingServices')}>
                    <label col={0} className="text-xl mr-2">🔗</label>
                    <label col={1} className="text-black">Open Banking connected services</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
                <gridLayout columns="auto, *, auto" className="p-4" onTap={() => navigation.navigate('LegalInformation')}>
                    <label col={0} className="text-xl mr-2">📜</label>
                    <label col={1} className="text-black">Legal information</label>
                    <label col={2} className="text-xl">›</label>
                </gridLayout>
            </stackLayout>
        </stackLayout>
    );

    return (
        <gridLayout rows="auto, *, auto" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="auto, *, auto" className="p-4 bg-white border-b">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Profile and Settings</label>
                <button 
                    col={2} 
                    className="text-lg bg-gray-100 w-10 h-10 text-center"
                    onTap={() => navigation.navigate("Support")}
                >❓</button>
            </gridLayout>

            {/* Content */}
            <gridLayout row={1} rows="auto, *">
                {/* Profile/Settings Toggle */}
                <gridLayout row={0} columns="*, *" className="bg-white p-4">
                    <stackLayout col={0} className="rounded-lg overflow-hidden">
                        <button 
                            className={`p-4 text-center ${activeTab === 'profile' ? 'bg-black text-white' : 'bg-white text-black'}`}
                            onTap={() => setActiveTab('profile')}
                        >
                            Profile
                        </button>
                    </stackLayout>
                    <stackLayout col={1} className="rounded-lg overflow-hidden">
                        <button 
                            className={`p-4 text-center ${activeTab === 'settings' ? 'bg-black text-white' : 'bg-white text-black'}`}
                            onTap={() => setActiveTab('settings')}
                        >
                            Settings
                        </button>
                    </stackLayout>
                </gridLayout>

                {/* Scrollable Content */}
                <scrollView row={1}>
                    {activeTab === 'profile' ? renderProfileContent() : renderSettingsContent()}
                </scrollView>
            </gridLayout>

            {/* Footer */}
            <contentView row={2}>
                <BottomNav />
            </contentView>
        </gridLayout>
    );
}