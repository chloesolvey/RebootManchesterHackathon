import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function ResetPasswordScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const [currentPassword, setCurrentPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Reset Password</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <stackLayout className="bg-white rounded-lg p-4 mb-4">
                        <label className="text-sm text-black mb-2">Current Password</label>
                        <textField 
                            secure={true}
                            text={currentPassword}
                            onTextChange={(args) => setCurrentPassword(args.value)}
                            className="border-b border-gray-300 p-2 mb-4"
                        />

                        <label className="text-sm text-black mb-2">New Password</label>
                        <textField 
                            secure={true}
                            text={newPassword}
                            onTextChange={(args) => setNewPassword(args.value)}
                            className="border-b border-gray-300 p-2 mb-4"
                        />

                        <label className="text-sm text-black mb-2">Confirm New Password</label>
                        <textField 
                            secure={true}
                            text={confirmPassword}
                            onTextChange={(args) => setConfirmPassword(args.value)}
                            className="border-b border-gray-300 p-2 mb-4"
                        />

                        <button className="bg-black text-white font-bold p-4 rounded-lg">
                            Reset Password
                        </button>
                    </stackLayout>

                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">Password Requirements</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • At least 8 characters long
                        </label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • Contains at least one uppercase letter
                        </label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • Contains at least one number
                        </label>
                        <label className="text-sm text-gray-500" textWrap={true}>
                            • Contains at least one special character
                        </label>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}