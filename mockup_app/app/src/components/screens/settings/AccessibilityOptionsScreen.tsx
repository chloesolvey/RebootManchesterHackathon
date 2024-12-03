import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function AccessibilityOptionsScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const [settings, setSettings] = React.useState({
        bigAppMode: false,
        highContrast: false,
        screenReader: false,
        reduceMotion: false,
        largeText: false
    });

    const toggleSetting = (key: keyof typeof settings) => {
        setSettings(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Accessibility Options</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <stackLayout className="bg-white rounded-lg p-4 mb-4">
                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Big App Mode</label>
                                <label className="text-sm text-gray-500">Increase overall app size</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${settings.bigAppMode ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleSetting('bigAppMode')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">High Contrast</label>
                                <label className="text-sm text-gray-500">Improve text visibility</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${settings.highContrast ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleSetting('highContrast')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Screen Reader Support</label>
                                <label className="text-sm text-gray-500">Enable screen reader optimization</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${settings.screenReader ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleSetting('screenReader')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Reduce Motion</label>
                                <label className="text-sm text-gray-500">Minimize animations</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${settings.reduceMotion ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleSetting('reduceMotion')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Larger Text</label>
                                <label className="text-sm text-gray-500">Increase text size</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${settings.largeText ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleSetting('largeText')}
                            />
                        </gridLayout>
                    </stackLayout>

                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">Need Help?</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            Contact our accessibility support team for assistance with any of these features.
                        </label>
                        <button className="bg-black text-white font-bold p-4 rounded-lg">
                            Contact Support
                        </button>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}