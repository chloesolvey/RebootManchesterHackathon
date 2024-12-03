import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { BottomNav } from "../navigation/BottomNav";

export function InboxScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();

    const messages = [
        { id: 1, date: "01 Mar 2024", title: "March - Account Statement", icon: "📄" },
        { id: 2, date: "01 Feb 2024", title: "February - Account Statement", icon: "📄" },
        { id: 3, date: "01 Jan 2024", title: "January - Account Statement", icon: "📄" },
        { id: 4, date: "01 Dec 2023", title: "December - Account Statement", icon: "📄" },
        { id: 5, date: "01 Nov 2023", title: "November - Account Statement", icon: "📄" },
        { id: 6, date: "01 Oct 2023", title: "October - Account Statement", icon: "📄" }
    ];

    return (
        <gridLayout rows="auto, *, auto" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="auto, *" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Welcome to your inbox</label>
            </gridLayout>

            {/* Content */}
            <scrollView row={1}>
                <stackLayout>
                    {/* Paperless Status */}
                    <stackLayout className="p-4 bg-white border-b">
                        <label className="text-black mb-2">Your online and paper preferences: Not Fully Paperless</label>
                        <button className="text-blue-500">Manage paperless preferences</button>
                    </stackLayout>

                    {/* Messages */}
                    <stackLayout className="mt-4">
                        {messages.map((message) => (
                            <gridLayout 
                                key={message.id}
                                columns="auto, *, auto" 
                                className="p-4 bg-white border-b"
                            >
                                <label col={0} className="text-xl mr-2">{message.icon}</label>
                                <stackLayout col={1}>
                                    <label className="text-black font-medium">{message.title}</label>
                                    <label className="text-sm text-gray-500">{message.date}</label>
                                </stackLayout>
                                <label col={2} className="text-xl">›</label>
                            </gridLayout>
                        ))}
                    </stackLayout>
                </stackLayout>
            </scrollView>

            {/* Footer */}
            <contentView row={2}>
                <BottomNav />
            </contentView>
        </gridLayout>
    );
}