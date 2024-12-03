import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

export function NotificationBar() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();

    return (
        <gridLayout 
            rows="auto" 
            columns="auto, *" 
            className="p-4 bg-gray-100"
            onTap={() => navigation.navigate("Inbox")}
        >
            <label col={0} className="text-xl">✉️</label>
            <label col={1} className="text-sm ml-2">You have 2 new notifications</label>
        </gridLayout>
    );
}