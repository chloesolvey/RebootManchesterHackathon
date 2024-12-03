import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function FingerprintLoginScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const [isEnabled, setIsEnabled] = React.useState(false);

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Fingerprint Login</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <stackLayout className="bg-white rounded-lg p-4 mb-4">
                        <gridLayout columns="*, auto" className="mb-4">
                            <label col={0} className="text-black font-bold">Enable Fingerprint Login</label>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${isEnabled ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => setIsEnabled(!isEnabled)}
                            />
                        </gridLayout>
                        <label className="text-sm text-gray-500" textWrap={true}>
                            Use your fingerprint to quickly and securely access your account without entering your password.
                        </label>
                    </stackLayout>

                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">Important Information</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • Your device must have fingerprint authentication enabled
                        </label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • You can still use your password to log in
                        </label>
                        <label className="text-sm text-gray-500" textWrap={true}>
                            • For security reasons, you may occasionally be asked to enter your password
                        </label>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}