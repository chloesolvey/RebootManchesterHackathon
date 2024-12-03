import * as React from "react";
import { RouteProp } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { getDestinationFromCode } from "../../utils/supportCodes";

type SupportScreenProps = {
    route: RouteProp<MainStackParamList, "Support">;
    navigation: FrameNavigationProp<MainStackParamList, "Support">;
};

export function SupportScreen({ navigation }: SupportScreenProps) {
    const [supportCode, setSupportCode] = React.useState("");
    const [error, setError] = React.useState("");

    const handleSupportCode = () => {
        if (supportCode.length !== 5) {
            setError("Support code must be 5 digits");
            return;
        }

        const destination = getDestinationFromCode(supportCode);
        if (destination) {
            navigation.navigate(destination as keyof MainStackParamList);
            setSupportCode("");
            setError("");
        } else {
            setError("Invalid support code");
        }
    };

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Support</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout>
                    {/* Support Code Entry */}
                    <stackLayout className="p-4">
                        <label className="text-lg font-bold text-black mb-2">Enter Support Code</label>
                        <textField
                            className="bg-white p-4 rounded-lg mb-2"
                            hint="Enter 5-digit code"
                            keyboardType="number"
                            maxLength={5}
                            text={supportCode}
                            onTextChange={(args) => {
                                setSupportCode(args.value);
                                setError("");
                            }}
                        />
                        {error ? (
                            <label className="text-red-500 mb-2">{error}</label>
                        ) : null}
                        <button 
                            className="bg-black text-white p-4 rounded-lg mb-4"
                            onTap={handleSupportCode}
                        >
                            Submit Code
                        </button>
                    </stackLayout>

                    {/* Support Boxes */}
                    <gridLayout rows="auto, auto" columns="*, *" className="p-4">
                        <stackLayout row={0} col={0} className="m-2 p-4 bg-white rounded-lg">
                            <label className="text-center font-semibold text-black">Prevent fraud</label>
                        </stackLayout>
                        <stackLayout row={0} col={1} className="m-2 p-4 bg-white rounded-lg">
                            <label className="text-center font-semibold text-black">Card Management</label>
                        </stackLayout>
                        <stackLayout row={1} col={0} className="m-2 p-4 bg-white rounded-lg">
                            <label className="text-center font-semibold text-black">Paying In and Out</label>
                        </stackLayout>
                        <stackLayout row={1} col={1} className="m-2 p-4 bg-white rounded-lg">
                            <label className="text-center font-semibold text-black">Help with a transaction</label>
                        </stackLayout>
                    </gridLayout>

                    {/* Browse Categories */}
                    <label className="text-center p-4 text-black">Browse all categories</label>

                    {/* Action Buttons */}
                    <stackLayout className="px-4">
                        <button className="bg-blue-500 text-white p-4 rounded-lg m-2 w-90">Message us 24/7</button>
                    </stackLayout>

                    {/* Menu List */}
                    <stackLayout className="p-4">
                        <button className="text-left p-2 border-b text-black">Cost of living support</button>
                        <button className="text-left p-2 border-b text-black">Other contact options</button>
                        <button className="text-left p-2 border-b text-black">Independent service quality survey results</button>
                    </stackLayout>

                    {/* FSCS Notice */}
                    <stackLayout className="p-4 bg-gray-200 m-4 rounded">
                        <label className="text-sm text-center text-black">FSCS is not applicable to deposits in the Channel Islands and the Isle of Man.</label>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}