import * as React from "react";
import { useNavigation } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { PaymentContactRow } from "../payments/PaymentContactRow";
import { AlphabetDivider } from "../payments/AlphabetDivider";
import { PaymentContext } from "../../contexts/PaymentContext";

export function PaymentContactsScreen() {
    const navigation = useNavigation<FrameNavigationProp<MainStackParamList>>();
    const [searchQuery, setSearchQuery] = React.useState("");
    const { setSelectedContact } = React.useContext(PaymentContext);

    const contacts = [
        { letter: "A", contacts: [
            { name: "Alice Johnson", accountDetails: "20-40-60 / 12345678" },
            { name: "Andrew Smith", accountDetails: "30-50-70 / 87654321" }
        ]},
        { letter: "B", contacts: [
            { name: "Britbound", accountDetails: "11-22-33 / 44556677" },
            { name: "Bob Wilson", accountDetails: "44-55-66 / 98765432" }
        ]},
        { letter: "J", contacts: [
            { name: "James Brown", accountDetails: "77-88-99 / 11223344" },
            { name: "John Davis", accountDetails: "12-23-34 / 55667788" }
        ]},
        { letter: "S", contacts: [
            { name: "Stephen Henry", accountDetails: "45-67-89 / 99887766" },
            { name: "Sarah Williams", accountDetails: "98-76-54 / 33221100" }
        ]}
    ];

    return (
        <gridLayout rows="auto, auto, *" className="bg-gray-100">
            {/* Header */}
            <gridLayout row={0} columns="*, auto" className="p-4 bg-white border-b">
                <label col={0} className="text-xl font-bold text-black">Choose who to pay</label>
                <button 
                    col={1} 
                    className="text-lg bg-gray-100 w-10 h-10 text-center"
                    onTap={() => navigation.goBack()}
                >✕</button>
            </gridLayout>

            {/* Search Bar */}
            <gridLayout row={1} columns="auto, *" className="p-4 bg-white border-b">
                <label col={0} className="text-xl mr-2">🔍</label>
                <textField
                    col={1}
                    className="p-2"
                    hint="Search contacts"
                    text={searchQuery}
                    onTextChange={(args) => setSearchQuery(args.value)}
                />
            </gridLayout>

            {/* Content */}
            <scrollView row={2}>
                <stackLayout>
                    {/* Pay New Button */}
                    <stackLayout className="p-4 bg-white border-b text-center">
                        <label className="text-3xl mb-2">➕</label>
                        <label className="text-black font-medium">Pay new</label>
                    </stackLayout>

                    {/* Contacts List */}
                    {contacts.map((section) => (
                        <stackLayout key={section.letter}>
                            <AlphabetDivider letter={section.letter} />
                            {section.contacts.map((contact, index) => (
                                <PaymentContactRow
                                    key={index}
                                    name={contact.name}
                                    accountDetails={contact.accountDetails}
                                    onSelect={() => {
                                        setSelectedContact(contact);
                                        navigation.navigate("Payments");
                                    }}
                                />
                            ))}
                        </stackLayout>
                    ))}
                </stackLayout>
            </scrollView>
        </gridLayout>
    );
}