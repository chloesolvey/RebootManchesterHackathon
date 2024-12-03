import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function StatementFrequencyScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const [selectedFrequency, setSelectedFrequency] = React.useState("1");

    const frequencies = [
        { value: "1", label: "Monthly" },
        { value: "3", label: "Quarterly" },
        { value: "6", label: "Bi-annually" },
        { value: "12", label: "Yearly" }
    ];

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Statement Frequency</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <stackLayout className="bg-white rounded-lg p-4 mb-4">
                        <label className="text-black font-bold mb-4">How often would you like to receive statements?</label>
                        
                        {frequencies.map((freq) => (
                            <gridLayout 
                                key={freq.value}
                                columns="*, auto" 
                                className="mb-4"
                                onTap={() => setSelectedFrequency(freq.value)}
                            >
                                <label col={0} className="text-black">{freq.label}</label>
                                <label 
                                    col={1} 
                                    className={`w-6 h-6 rounded-full border-2 ${
                                        selectedFrequency === freq.value 
                                            ? 'bg-black border-black' 
                                            : 'border-gray-300'
                                    }`}
                                />
                            </gridLayout>
                        ))}
                    </stackLayout>

                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">About Statements</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • You can view your transactions anytime in the app
                        </label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • Statements are available for download for 7 years
                        </label>
                        <label className="text-sm text-gray-500" textWrap={true}>
                            • You can request additional statements at any time
                        </label>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}