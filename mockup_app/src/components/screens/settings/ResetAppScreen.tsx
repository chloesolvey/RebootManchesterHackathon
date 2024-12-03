import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function ResetAppScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Reset App</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <stackLayout className="bg-white rounded-lg p-4 mb-4">
                        <label className="text-black font-bold mb-4">Clear App Data</label>
                        
                        <button className="bg-gray-200 text-black p-4 rounded-lg mb-4">
                            Clear Cache
                        </button>
                        
                        <label className="text-sm text-gray-500 mb-4" textWrap={true}>
                            Clears temporary data and might help if you're experiencing performance issues.
                        </label>

                        <button className="bg-red-500 text-white p-4 rounded-lg mb-4">
                            Reset App
                        </button>
                        
                        <label className="text-sm text-gray-500" textWrap={true}>
                            This will delete all app data and return it to its initial state. 
                            You'll need to log in again after this action.
                        </label>
                    </stackLayout>

                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">Important Information</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • Resetting the app will not affect your account or banking information
                        </label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • All saved preferences will be cleared
                        </label>
                        <label className="text-sm text-gray-500" textWrap={true}>
                            • You'll need to set up biometric login again if you use it
                        </label>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}