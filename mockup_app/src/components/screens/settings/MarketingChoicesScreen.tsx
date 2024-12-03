import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function MarketingChoicesScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const [preferences, setPreferences] = React.useState({
        email: true,
        post: false,
        phone: false,
        sms: true,
        pushNotifications: true
    });

    const togglePreference = (key: keyof typeof preferences) => {
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Marketing Choices</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <stackLayout className="bg-white rounded-lg p-4 mb-4">
                        <label className="text-black font-bold mb-4">How would you like to hear from us?</label>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Email</label>
                                <label className="text-sm text-gray-500">Receive offers via email</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${preferences.email ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => togglePreference('email')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Post</label>
                                <label className="text-sm text-gray-500">Receive offers by mail</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${preferences.post ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => togglePreference('post')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Phone</label>
                                <label className="text-sm text-gray-500">Receive phone calls about offers</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${preferences.phone ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => togglePreference('phone')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">SMS</label>
                                <label className="text-sm text-gray-500">Receive offers via text message</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${preferences.sms ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => togglePreference('sms')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Push Notifications</label>
                                <label className="text-sm text-gray-500">Receive offers via app notifications</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${preferences.pushNotifications ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => togglePreference('pushNotifications')}
                            />
                        </gridLayout>
                    </stackLayout>

                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">About Marketing Preferences</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • You can change these preferences at any time
                        </label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • We'll only send you relevant offers based on your interests
                        </label>
                        <label className="text-sm text-gray-500" textWrap={true}>
                            • Your choices won't affect important account notifications
                        </label>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}