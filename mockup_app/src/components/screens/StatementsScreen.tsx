import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

export function StatementsScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const [selectedYear, setSelectedYear] = React.useState(2024);
    const [selectedMonth, setSelectedMonth] = React.useState<string | null>(null);

    const months = [
        ["JAN", "FEB", "MAR"],
        ["APR", "MAY", "JUN"],
        ["JUL", "AUG", "SEP"],
        ["OCT", "NOV", "DEC"]
    ];

    return (
        <gridLayout rows="auto, auto, auto, *, auto" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} columns="*, auto" className="p-4 bg-white border-b">
                <label col={0} className="text-xl font-bold text-black">Download or print statements</label>
                <button 
                    col={1} 
                    className="text-lg bg-gray-100 w-10 h-10 text-center"
                    onTap={() => navigation.goBack()}
                >✕</button>
            </gridLayout>

            {/* Info Text */}
            <stackLayout row={1} className="bg-black p-4">
                <label className="text-white" textWrap={true}>
                    Whether you need to prove who you are, your address or your income, 
                    the quickest way could be to download a summary of your transactions. 
                    You can then save, email or print it from your device.
                </label>
                <label className="text-white mt-2" textWrap={true}>
                    If you need a full statement, it can be found and downloaded from your 
                    digital inbox. If you need further help you can chat with us.
                </label>
            </stackLayout>

            {/* Year Selection */}
            <gridLayout row={2} columns="auto, *, auto" className="p-4">
                <button col={0} className="text-xl" onTap={() => setSelectedYear(selectedYear - 1)}>‹</button>
                <label col={1} className="text-center text-black font-bold">{selectedYear}</label>
                <button col={2} className="text-xl" onTap={() => setSelectedYear(selectedYear + 1)}>›</button>
            </gridLayout>

            {/* Months Grid */}
            <scrollView row={3}>
                <stackLayout className="p-4">
                    {months.map((row, rowIndex) => (
                        <gridLayout key={rowIndex} columns="*, *, *" className="mb-4">
                            {row.map((month, colIndex) => (
                                <button 
                                    key={colIndex} 
                                    col={colIndex}
                                    className={`mx-1 p-4 rounded-lg ${
                                        selectedMonth === month 
                                            ? 'bg-black text-white' 
                                            : 'bg-white text-black'
                                    }`}
                                    onTap={() => setSelectedMonth(month)}
                                >
                                    {month}
                                </button>
                            ))}
                        </gridLayout>
                    ))}
                </stackLayout>
            </scrollView>

            {/* View Button */}
            <button 
                row={4} 
                className="bg-black text-white font-bold p-4 m-4 rounded-lg"
                isEnabled={selectedMonth !== null}
            >
                View
            </button>
        </gridLayout>
    );
}