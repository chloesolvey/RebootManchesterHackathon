import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function DataConsentScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const [consents, setConsents] = React.useState({
        productRecommendations: true,
        transactionAnalysis: true,
        thirdPartySharing: false,
        locationServices: true,
        behavioralAnalytics: false
    });

    const toggleConsent = (key: keyof typeof consents) => {
        setConsents(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Data Consent</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <stackLayout className="bg-white rounded-lg p-4 mb-4">
                        <label className="text-black font-bold mb-4">How we use your data</label>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Product Recommendations</label>
                                <label className="text-sm text-gray-500">Allow us to suggest relevant products</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${consents.productRecommendations ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleConsent('productRecommendations')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Transaction Analysis</label>
                                <label className="text-sm text-gray-500">Analyze spending patterns</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${consents.transactionAnalysis ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleConsent('transactionAnalysis')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Third Party Sharing</label>
                                <label className="text-sm text-gray-500">Share data with partners</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${consents.thirdPartySharing ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleConsent('thirdPartySharing')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto" className="mb-4">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Location Services</label>
                                <label className="text-sm text-gray-500">Use location for better service</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${consents.locationServices ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleConsent('locationServices')}
                            />
                        </gridLayout>

                        <gridLayout columns="*, auto">
                            <stackLayout col={0}>
                                <label className="text-black font-bold">Behavioral Analytics</label>
                                <label className="text-sm text-gray-500">Improve our services</label>
                            </stackLayout>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${consents.behavioralAnalytics ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => toggleConsent('behavioralAnalytics')}
                            />
                        </gridLayout>
                    </stackLayout>

                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">Your Privacy Rights</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • You can change these settings at any time
                        </label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • Some data collection is required for core services
                        </label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • We never sell your personal information
                        </label>
                        <button className="bg-black text-white font-bold p-4 rounded-lg mt-4">
                            View Privacy Policy
                        </button>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}