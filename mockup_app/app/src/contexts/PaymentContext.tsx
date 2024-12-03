import * as React from "react";

interface PaymentContact {
    name: string;
    accountDetails: string;
}

type PaymentContextType = {
    selectedContact: PaymentContact | null;
    setSelectedContact: (contact: PaymentContact | null) => void;
};

export const PaymentContext = React.createContext<PaymentContextType>({
    selectedContact: null,
    setSelectedContact: () => {},
});

export function PaymentProvider({ children }: { children: React.ReactNode }) {
    const [selectedContact, setSelectedContact] = React.useState<PaymentContact | null>(null);

    return (
        <PaymentContext.Provider value={{ selectedContact, setSelectedContact }}>
            {children}
        </PaymentContext.Provider>
    );
}