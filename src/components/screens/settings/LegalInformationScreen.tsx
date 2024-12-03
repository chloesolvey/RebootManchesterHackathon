import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function LegalInformationScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Legal Information</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <stackLayout className="bg-white rounded-lg p-4 mb-4">
                        <label className="text-black font-bold mb-4">Bank Information</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            Lloyds Bank plc. Registered Office: 25 Gresham Street, London EC2V 7HN.
                        </label>
                        <label className="text-sm text-gray-500 mb-4" textWrap={true}>
                            Registered in England and Wales no. 2065.
                        </label>

                        <label className="text-black font-bold mb-2">Regulatory Information</label>
                        <label className="text-sm text-gray-500 mb-4" textWrap={true}>
                            Authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority under Registration Number 119278.
                        </label>

                        <label className="text-black font-bold mb-2">FSCS Protection</label>
                        <label className="text-sm text-gray-500 mb-4" textWrap={true}>
                            Your eligible deposits are protected up to £85,000 by the Financial Services Compensation Scheme, the UK's deposit guarantee scheme.
                        </label>

                        <button className="bg-gray-200 text-black p-4 rounded-lg mb-2">
                            Terms & Conditions
                        </button>
                        <button className="bg-gray-200 text-black p-4 rounded-lg mb-2">
                            Privacy Policy
                        </button>
                        <button className="bg-gray-200 text-black p-4 rounded-lg mb-2">
                            Cookie Policy
                        </button>
                        <button className="bg-gray-200 text-black p-4 rounded-lg">
                            Banking Licenses
                        </button>
                    </stackLayout>

                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">Contact Information</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            For general enquiries: 0345 300 0000
                        </label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            From abroad: +44 1733 347 007
                        </label>
                        <label className="text-sm text-gray-500" textWrap={true}>
                            Financial Ombudsman Service: 0800 023 4567
                        </label>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}