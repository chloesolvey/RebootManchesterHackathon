// Support code mapping for quick navigation
export const supportCodes = {
    // App Security
    "12345": "FingerprintLogin",
    "12346": "ResetPassword",
    "12347": "AutoLogoff",
    "12348": "ResetApp",
    
    // How we contact you
    "23456": "NotificationSettings",
    "23457": "PaperFreePreferences",
    "23458": "StatementFrequency",
    "23459": "AccessibilityOptions",
    
    // Other feature settings
    "34567": "OpenBankingAccounts",
    
    // Privacy and data
    "45678": "AppDetails",
    "45679": "MarketingChoices",
    "45680": "DataConsent",
    "45681": "OpenBankingServices",
    "45682": "LegalInformation",

    // Regular Payments
    "56789": "RegularPayments",

    // Payment Limits
    "78901": "PaymentLimits",

    // Statements
    "89012": "Statements",

    // Inbox
    "90123": "Inbox"
} as const;

export type SupportCode = keyof typeof supportCodes;

export function isValidSupportCode(code: string): code is SupportCode {
    return code in supportCodes;
}

export function getDestinationFromCode(code: string): string | null {
    if (isValidSupportCode(code)) {
        return supportCodes[code];
    }
    return null;
}