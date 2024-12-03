import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function AutoLogoffScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const [selectedTime, setSelectedTime] = React.useState("5");

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Auto Logoff</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <stackLayout className="bg-white rounded-lg p-4 mb-4">
                        <label className="text-black font-bold mb-4">Auto logoff after inactivity</label>
                        
                        {["1", "5", "10", "15", "30"].map((time) => (
                            <gridLayout 
                                key={time}
                                columns="*, auto" 
                                className="mb-4"
                                onTap={() => setSelectedTime(time)}
                            >
                                <label col={0} className="text-black">{time} minutes</label>
                                <label 
                                    col={1} 
                                    className={`w-6 h-6 rounded-full border-2 ${
                                        selectedTime === time 
                                            ? 'bg-black border-black' 
                                            : 'border-gray-300'
                                    }`}
                                />
                            </gridLayout>
                        ))}
                    </stackLayout>

                    <stackLayout className="bg-white rounded-lg p-4">
                        <label className="text-black font-bold mb-2">About Auto Logoff</label>
                        <label className="text-sm text-gray-500" textWrap={true}>
                            For your security, we'll automatically log you out after a period of inactivity. 
                            You can choose how long you'd like to stay logged in before this happens.
                        </label>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}