import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function PaperFreePreferencesScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const [isPaperless, setIsPaperless] = React.useState(true);

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Paper Free Preferences</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <stackLayout className="bg-white rounded-lg p-4 mb-4">
                        <gridLayout columns="*, auto" className="mb-4">
                            <label col={0} className="text-black font-bold">Go Paper Free</label>
                            <button 
                                col={1} 
                                className={`w-12 h-6 rounded-full ${isPaperless ? 'bg-green-500' : 'bg-gray-300'}`}
                                onTap={() => setIsPaperless(!isPaperless)}
                            />
                        </gridLayout>
                        <label className="text-sm text-gray-500 mb-4" textWrap={true}>
                            Receive your statements and other important documents electronically instead of by post.
                        </label>
                    </stackLayout>

                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">Benefits of Going Paper Free</label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • Access your documents anytime, anywhere
                        </label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • Reduce your environmental impact
                        </label>
                        <label className="text-sm text-gray-500 mb-2" textWrap={true}>
                            • Keep your documents secure
                        </label>
                        <label className="text-sm text-gray-500" textWrap={true}>
                            • Reduce clutter and paper storage
                        </label>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}