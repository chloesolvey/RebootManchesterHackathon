import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

export function Header() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();

    return (
        <gridLayout rows="auto" columns="auto, *, auto, auto" className="p-4">
            <label col={0} className="text-sm mr-2">✉️</label>
            <label col={1} className="text-xl font-bold text-black">Welcome James</label>
            <button 
                col={2} 
                className="text-sm mx-1 w-10 h-10 text-center" 
                onTap={() => navigation.navigate("Support")}
            >
                ❓
            </button>
            <button 
                col={3} 
                className="text-sm w-10 h-10 text-center"
                onTap={() => navigation.navigate("Settings")}
            >
                ⚙️
            </button>
        </gridLayout>
    );
}