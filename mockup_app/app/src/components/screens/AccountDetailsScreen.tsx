import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { BottomNav } from "../navigation/BottomNav";

export function AccountDetailsScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();

    const transactions = [
        { date: "Dec 23", description: "Tesco Express", amount: -45.67 },
        { date: "Dec 23", description: "Amazon Prime", amount: -7.99 },
        { date: "Dec 22", description: "Monthly Salary", amount: 2500.00 },
        { date: "Dec 21", description: "Amazon.co.uk", amount: -29.99 },
        { date: "Dec 21", description: "Netflix Subscription", amount: -15.99 },
        { date: "Dec 20", description: "Costa Coffee", amount: -3.75 },
        { date: "Dec 20", description: "TFL Travel", amount: -7.40 },
        { date: "Dec 19", description: "Train Ticket", amount: -12.50 },
        { date: "Dec 19", description: "Sainsbury's", amount: -68.45 },
        { date: "Dec 18", description: "Phone Bill", amount: -45.00 },
        { date: "Dec 18", description: "Gym Membership", amount: -29.99 },
        { date: "Dec 17", description: "Interest Paid", amount: 0.15 },
        { date: "Dec 17", description: "Water Bill", amount: -32.50 },
        { date: "Dec 16", description: "British Gas", amount: -89.00 },
        { date: "Dec 16", description: "Council Tax", amount: -156.00 }
    ];

    return (
        <gridLayout rows="auto, auto, auto, auto, auto, auto, *, auto">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="auto, *, auto, auto" className="p-4 bg-white">
                <button col={0} className="text-lg bg-gray-100 w-10 h-10 text-center" onTap={() => navigation.goBack()}>‹</button>
                <label col={1} className="text-xl font-bold text-black ml-2">Club Lloyds</label>
                <button 
                    col={2} 
                    className="text-lg mx-1 bg-gray-100 w-10 h-10 text-center"
                    onTap={() => navigation.navigate("Support")}
                >❓</button>
                <button 
                    col={3} 
                    className="text-lg bg-gray-100 w-10 h-10 text-center"
                >⋮</button>
            </gridLayout>

            <stackLayout row={1} className="p-4 bg-white border-b">
                <label className="text-3xl font-bold text-black">£1,234.56</label>
            </stackLayout>

            <stackLayout row={2} className="bg-green-600">
                <gridLayout columns="*, auto" className="p-4">
                    <label col={0} className="text-white font-medium">Manage All Subscriptions</label>
                    <label col={1} className="text-white font-medium">→</label>
                </gridLayout>
            </stackLayout>

            <gridLayout row={3} columns="*, auto" className="p-4">
                <label col={0} className="text-black">December</label>
                <label col={1} className="font-bold text-black">All</label>
            </gridLayout>

            <gridLayout row={4} columns="auto, auto, *, auto, auto" className="p-4 bg-white">
                <button col={0} className="bg-gray-200 rounded-lg px-4 py-2 mr-2 text-black">In</button>
                <button col={1} className="bg-gray-200 rounded-lg px-4 py-2 text-black">Out</button>
                <label col={2}></label>
                <button 
                    col={3} 
                    className="text-xl mx-2"
                    onTap={() => navigation.navigate("Statements")}
                >📥</button>
                <button col={4} className="text-xl">🔍</button>
            </gridLayout>

            <label row={5} className="p-4 font-bold text-black bg-white">Transactions</label>

            <scrollView row={6} className="bg-white">
                <stackLayout>
                    {transactions.map((transaction, index) => (
                        <gridLayout 
                            key={index}
                            columns="auto, *, auto" 
                            className="p-4 border-b"
                        >
                            <label col={0} className="text-gray-500">{transaction.date}</label>
                            <label col={1} className="ml-4 text-black">{transaction.description}</label>
                            <label col={2} className={transaction.amount > 0 ? "text-green-600" : "text-black"}>
                                {transaction.amount > 0 ? "+" : ""}£{Math.abs(transaction.amount).toFixed(2)}
                            </label>
                        </gridLayout>
                    ))}
                </stackLayout>
            </scrollView>

            <contentView row={7}>
                <BottomNav />
            </contentView>
        </gridLayout>
    );
}