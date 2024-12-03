import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

export function RegularPaymentsScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();

    const standingOrders = [
        {
            recipient: "John Smith",
            amount: 250.00,
            type: "Standing Order",
            description: "Rent Payment",
            frequency: "Monthly",
            nextDate: "28 Dec 2023"
        }
    ];

    const directDebits = [
        {
            recipient: "British Gas",
            amount: 89.00,
            type: "Direct Debit",
            description: "Energy Bill",
            frequency: "Monthly",
            nextDate: "15 Dec 2023"
        },
        {
            recipient: "Sky TV",
            amount: 45.99,
            type: "Direct Debit",
            description: "TV Package",
            frequency: "Monthly",
            nextDate: "1 Jan 2024"
        },
        {
            recipient: "Virgin Media",
            amount: 35.00,
            type: "Direct Debit",
            description: "Internet",
            frequency: "Monthly",
            nextDate: "5 Jan 2024"
        }
    ];

    const subscriptions = [
        {
            recipient: "Netflix",
            amount: 15.99,
            type: "Subscription",
            description: "Standard Plan",
            frequency: "Monthly",
            nextDate: "12 Dec 2023"
        },
        {
            recipient: "Spotify",
            amount: 9.99,
            type: "Subscription",
            description: "Premium Plan",
            frequency: "Monthly",
            nextDate: "15 Dec 2023"
        },
        {
            recipient: "Amazon Prime",
            amount: 7.99,
            type: "Subscription",
            description: "Prime Membership",
            frequency: "Monthly",
            nextDate: "20 Dec 2023"
        }
    ];

    const PaymentRow = ({ payment }: { payment: any }) => (
        <stackLayout className="bg-white p-4 border-b">
            <gridLayout columns="*, auto" className="mb-1">
                <label col={0} className="text-black font-medium">{payment.recipient}</label>
                <label col={1} className="text-black">£{payment.amount.toFixed(2)}</label>
            </gridLayout>
            <gridLayout columns="*, auto">
                <label col={0} className="text-gray-500">{payment.type}</label>
                <label col={1} className="text-gray-500">{payment.description}</label>
            </gridLayout>
            <gridLayout columns="*, auto">
                <label col={0} className="text-gray-500">{payment.frequency}</label>
                <label col={1} className="text-gray-500">Next: {payment.nextDate}</label>
            </gridLayout>
        </stackLayout>
    );

    return (
        <gridLayout rows="auto, *, auto" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} columns="*, auto, auto" className="p-4 bg-white border-b">
                <label col={0} className="text-xl font-bold text-black">Club Lloyds</label>
                <button col={1} className="text-lg mx-2">✎</button>
                <button 
                    col={2} 
                    className="text-lg"
                    onTap={() => navigation.goBack()}
                >✕</button>
            </gridLayout>

            {/* Content */}
            <scrollView row={1}>
                <stackLayout>
                    {/* Help with debt button */}
                    <gridLayout columns="*, auto" className="bg-white p-4 m-4 rounded-lg">
                        <label col={0} className="text-black">Help with your debt or payments</label>
                        <label col={1}>+</label>
                    </gridLayout>

                    {/* Standing Orders */}
                    <stackLayout className="m-4">
                        <label className="text-lg font-bold text-black mb-2">Standing orders</label>
                        {standingOrders.map((order, index) => (
                            <PaymentRow key={index} payment={order} />
                        ))}
                    </stackLayout>

                    {/* Direct Debits */}
                    <stackLayout className="m-4">
                        <label className="text-lg font-bold text-black mb-2">Direct debits</label>
                        {directDebits.map((debit, index) => (
                            <PaymentRow key={index} payment={debit} />
                        ))}
                    </stackLayout>

                    {/* Subscriptions */}
                    <stackLayout className="m-4">
                        <label className="text-lg font-bold text-black mb-2">Subscriptions</label>
                        {subscriptions.map((sub, index) => (
                            <PaymentRow key={index} payment={sub} />
                        ))}
                    </stackLayout>
                </stackLayout>
            </scrollView>

            {/* Footer */}
            <button row={2} className="bg-black text-white font-bold p-4 m-4 rounded-lg text-center">
                Setup Standing Order
            </button>
        </gridLayout>
    );
}