import * as React from "react";

export function CardManagementCard() {
    return (
        <stackLayout className="bg-white rounded-lg mx-4 mb-4 p-3">
            <label className="text-sm font-bold text-black mb-1">Manage card</label>
            <label className="text-xs text-gray-500">View PIN, freeze card and more.</label>
        </stackLayout>
    );
}