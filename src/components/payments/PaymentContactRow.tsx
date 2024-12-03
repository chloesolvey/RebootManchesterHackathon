import * as React from "react";

interface PaymentContactProps {
    name: string;
    accountDetails: string;
    onSelect: () => void;
}

export function PaymentContactRow({ name, accountDetails, onSelect }: PaymentContactProps) {
    return (
        <gridLayout columns="auto, *, auto" className="p-4 bg-white" onTap={onSelect}>
            <label col={0} className="text-xl mr-2">👤</label>
            <stackLayout col={1}>
                <label className="text-black font-medium">{name}</label>
                <label className="text-sm text-gray-500">{accountDetails}</label>
            </stackLayout>
            <label col={2} className="text-xl">⋯</label>
        </gridLayout>
    );
}