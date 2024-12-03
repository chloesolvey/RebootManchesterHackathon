import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";

export function AppDetailsScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();

    const appInfo = {
        version: "2.15.3",
        buildNumber: "1234",
        installDate: "15 November 2023",
        lastUpdate: "1 December 2023",
        cacheSize: "156 MB",
        deviceId: "DEVICE-ID-12345",
        environment: "Production"
    };

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">App Details</label>
            </gridLayout>

            <scrollView row={1}>
                <stackLayout className="p-4">
                    <stackLayout className="bg-white rounded-lg p-4 mb-4">
                        <gridLayout columns="auto, *" className="mb-4">
                            <label col={0} className="text-gray-500 w-32">Version</label>
                            <label col={1} className="text-black">{appInfo.version}</label>
                        </gridLayout>

                        <gridLayout columns="auto, *" className="mb-4">
                            <label col={0} className="text-gray-500 w-32">Build</label>
                            <label col={1} className="text-black">{appInfo.buildNumber}</label>
                        </gridLayout>

                        <gridLayout columns="auto, *" className="mb-4">
                            <label col={0} className="text-gray-500 w-32">Installed</label>
                            <label col={1} className="text-black">{appInfo.installDate}</label>
                        </gridLayout>

                        <gridLayout columns="auto, *" className="mb-4">
                            <label col={0} className="text-gray-500 w-32">Last Update</label>
                            <label col={1} className="text-black">{appInfo.lastUpdate}</label>
                        </gridLayout>

                        <gridLayout columns="auto, *" className="mb-4">
                            <label col={0} className="text-gray-500 w-32">Cache Size</label>
                            <label col={1} className="text-black">{appInfo.cacheSize}</label>
                        </gridLayout>

                        <gridLayout columns="auto, *" className="mb-4">
                            <label col={0} className="text-gray-500 w-32">Device ID</label>
                            <label col={1} className="text-black">{appInfo.deviceId}</label>
                        </gridLayout>

                        <gridLayout columns="auto, *">
                            <label col={0} className="text-gray-500 w-32">Environment</label>
                            <label col={1} className="text-black">{appInfo.environment}</label>
                        </gridLayout>
                    </stackLayout>

                    <stackLayout className="bg-white rounded-lg p-4">
                        <button className="bg-gray-200 text-black p-4 rounded-lg mb-4">
                            Check for Updates
                        </button>
                        <button className="bg-gray-200 text-black p-4 rounded-lg">
                            Clear Cache
                        </button>
                    </stackLayout>
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}