import * as React from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { PaymentContext } from "../../contexts/PaymentContext";

export function PaymentsScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const { selectedContact, setSelectedContact } = React.useContext(PaymentContext);
    const [amount, setAmount] = React.useState("");
    const [reference, setReference] = React.useState("");
    const [isStandingOrder, setIsStandingOrder] = React.useState(false);

    useFocusEffect(
        React.useCallback(() => {
            return () => {
                setSelectedContact(null);
            };
        }, [setSelectedContact])
    );

    return (
        <gridLayout rows="auto, *" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} rows="auto" columns="*, auto" className="p-4 bg-white border-b">
                <label col={0} className="text-xl font-bold">Pay & Transfer</label>
                <button 
                    col={1} 
                    className="text-lg bg-gray-100 w-10 h-10 text-center"
                    onTap={() => {
                        setSelectedContact(null);
                        navigation.navigate("Home");
                    }}
                >✕</button>
            </gridLayout>

            {/* Content */}
            <scrollView row={1}>
                <stackLayout className="pb-20">
                    {/* From Account Section */}
                    <label className="p-4 font-medium">From:</label>
                    <gridLayout columns="auto, *, auto" className="p-4 bg-white mx-2 rounded-lg">
                        <label col={0} className="text-xl mr-2">📁</label>
                        <stackLayout col={1}>
                            <label className="font-medium">Club Lloyds</label>
                            <label className="text-gray-500 text-sm">11-22-33 / 3451231</label>
                            <label className="font-bold">£1,234.56</label>
                        </stackLayout>
                        <label col={2} className="text-xl">›</label>
                    </gridLayout>

                    {/* To Account Section */}
                    <label className="p-4 font-medium mt-2">To:</label>
                    <gridLayout 
                        columns="auto, *, auto" 
                        className="p-4 bg-white mx-2 rounded-lg"
                        onTap={() => navigation.navigate("PaymentContacts")}
                    >
                        <label col={0} className="text-xl mr-2">👤</label>
                        <stackLayout col={1}>
                            {selectedContact ? (
                                <>
                                    <label className="font-medium">{selectedContact.name}</label>
                                    <label className="text-gray-500 text-sm">{selectedContact.accountDetails}</label>
                                </>
                            ) : (
                                <>
                                    <label className="font-medium">Choose who to pay</label>
                                    <label className="text-gray-500 text-sm">or pay someone new</label>
                                </>
                            )}
                        </stackLayout>
                        <label col={2} className="text-xl">›</label>
                    </gridLayout>

                    {/* Payment Details Section - Only shown when contact is selected */}
                    {selectedContact && (
                        <stackLayout className="mt-4">
                            {/* Amount Entry */}
                            <stackLayout className="bg-white mx-2 p-4 rounded-lg">
                                <gridLayout columns="auto, *" className="mb-2">
                                    <label col={0} className="text-black font-medium">Amount:</label>
                                    <textField
                                        col={1}
                                        className="text-right"
                                        keyboardType="number"
                                        text={amount}
                                        onTextChange={(args) => setAmount(args.value)}
                                    />
                                </gridLayout>
                                <label 
                                    className="text-blue-500 underline mb-4" 
                                    onTap={() => navigation.navigate("PaymentLimits")}
                                >
                                    View payment limits
                                </label>

                                {/* Reference Entry */}
                                <gridLayout columns="auto, *" className="mb-4">
                                    <label col={0} className="text-black font-medium">Ref:</label>
                                    <textField
                                        col={1}
                                        className="text-right"
                                        text={reference}
                                        onTextChange={(args) => setReference(args.value)}
                                    />
                                </gridLayout>

                                {/* Date Selection */}
                                <gridLayout columns="auto, *" className="mb-4">
                                    <label col={0} className="text-black font-medium">When:</label>
                                    <gridLayout col={1} columns="*, auto">
                                        <label col={0} className="text-right">Today</label>
                                        <label col={1} className="text-xl ml-2">📅</label>
                                    </gridLayout>
                                </gridLayout>

                                {/* Standing Order Toggle */}
                                <gridLayout columns="*, auto" className="mb-4">
                                    <label col={0} className="text-black">Make a standing order</label>
                                    <button 
                                        col={1} 
                                        className={`w-12 h-6 rounded-full ${isStandingOrder ? 'bg-green-500' : 'bg-gray-300'}`}
                                        onTap={() => setIsStandingOrder(!isStandingOrder)}
                                    />
                                </gridLayout>

                                {/* Continue Button */}
                                <button className="bg-black text-white font-bold p-4 rounded-lg text-center">
                                    Continue
                                </button>
                            </stackLayout>
                        </stackLayout>
                    )}
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}