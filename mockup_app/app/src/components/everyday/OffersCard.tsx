import * as React from "react";

export function OffersCard() {
    return (
        <gridLayout columns="auto, *" className="bg-white rounded-lg mx-4 mb-4 p-3">
            <label col={0} className="text-base mr-2">💰</label>
            <stackLayout col={1}>
                <label className="text-sm font-bold text-black mb-1">Everyday Offers</label>
                <label className="text-xs text-gray-500">Activate your offers to earn cashback</label>
            </stackLayout>
        </gridLayout>
    );
}