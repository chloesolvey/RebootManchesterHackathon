import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

export function PaymentLimitsScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();

    const limits = [
        { type: "Single Payment", limit: "£20,000", period: "per payment" },
        { type: "Daily Limit", limit: "£50,000", period: "per day" },
        { type: "Standing Order", limit: "£20,000", period: "per payment" },
        { type: "Future Dated", limit: "£20,000", period: "per payment" }
    ];

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Payment Limits</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    {/* Limits Info */}
                    <stackLayout className="bg-white rounded-lg p-4 mb-4">
                        {limits.map((item, index) => (
                            <gridLayout 
                                key={index}
                                columns="*, auto" 
                                className={`py-4 ${index !== limits.length - 1 ? 'border-b' : ''}`}
                            >
                                <stackLayout col={0}>
                                    <label className="text-black font-bold">{item.type}</label>
                                    <label className="text-sm text-gray-500">{item.period}</label>
                                </stackLayout>
                                <label col={1} className="text-black font-bold">{item.limit}</label>
                            </gridLayout>
                        ))}
                    </stackLayout>

                    {/* Additional Information */}
                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">Important Information</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • These limits are for your security
                        </label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • Limits apply to all payments made through the app
                        </label>
                        <label className="text-sm text-gray-500" textWrap={true}>
                            • Contact us if you need to make a payment above these limits
                        </label>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}