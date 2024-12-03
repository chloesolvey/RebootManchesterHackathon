import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { SupportScreen } from "./screens/SupportScreen";
import { AccountDetailsScreen } from "./screens/AccountDetailsScreen";
import { PaymentsScreen } from "./screens/PaymentsScreen";
import { PaymentContactsScreen } from "./screens/PaymentContactsScreen";
import { PaymentLimitsScreen } from "./screens/PaymentLimitsScreen";
import { CardManagementScreen } from "./screens/CardManagementScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { FingerprintLoginScreen } from "./screens/settings/FingerprintLoginScreen";
import { ResetPasswordScreen } from "./screens/settings/ResetPasswordScreen";
import { AutoLogoffScreen } from "./screens/settings/AutoLogoffScreen";
import { ResetAppScreen } from "./screens/settings/ResetAppScreen";
import { NotificationSettingsScreen } from "./screens/settings/NotificationSettingsScreen";
import { PaperFreePreferencesScreen } from "./screens/settings/PaperFreePreferencesScreen";
import { StatementFrequencyScreen } from "./screens/settings/StatementFrequencyScreen";
import { AccessibilityOptionsScreen } from "./screens/settings/AccessibilityOptionsScreen";
import { OpenBankingAccountsScreen } from "./screens/settings/OpenBankingAccountsScreen";
import { AppDetailsScreen } from "./screens/settings/AppDetailsScreen";
import { MarketingChoicesScreen } from "./screens/settings/MarketingChoicesScreen";
import { DataConsentScreen } from "./screens/settings/DataConsentScreen";
import { OpenBankingServicesScreen } from "./screens/settings/OpenBankingServicesScreen";
import { LegalInformationScreen } from "./screens/settings/LegalInformationScreen";
import { RegularPaymentsScreen } from "./screens/RegularPaymentsScreen";
import { StatementsScreen } from "./screens/StatementsScreen";
import { InboxScreen } from "./screens/InboxScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
            />
            <StackNavigator.Screen
                name="Support"
                component={SupportScreen}
            />
            <StackNavigator.Screen
                name="AccountDetails"
                component={AccountDetailsScreen}
            />
            <StackNavigator.Screen
                name="Payments"
                component={PaymentsScreen}
            />
            <StackNavigator.Screen
                name="PaymentContacts"
                component={PaymentContactsScreen}
            />
            <StackNavigator.Screen
                name="PaymentLimits"
                component={PaymentLimitsScreen}
            />
            <StackNavigator.Screen
                name="CardManagement"
                component={CardManagementScreen}
            />
            <StackNavigator.Screen
                name="Settings"
                component={SettingsScreen}
            />
            <StackNavigator.Screen
                name="FingerprintLogin"
                component={FingerprintLoginScreen}
            />
            <StackNavigator.Screen
                name="ResetPassword"
                component={ResetPasswordScreen}
            />
            <StackNavigator.Screen
                name="AutoLogoff"
                component={AutoLogoffScreen}
            />
            <StackNavigator.Screen
                name="ResetApp"
                component={ResetAppScreen}
            />
            <StackNavigator.Screen
                name="NotificationSettings"
                component={NotificationSettingsScreen}
            />
            <StackNavigator.Screen
                name="PaperFreePreferences"
                component={PaperFreePreferencesScreen}
            />
            <StackNavigator.Screen
                name="StatementFrequency"
                component={StatementFrequencyScreen}
            />
            <StackNavigator.Screen
                name="AccessibilityOptions"
                component={AccessibilityOptionsScreen}
            />
            <StackNavigator.Screen
                name="OpenBankingAccounts"
                component={OpenBankingAccountsScreen}
            />
            <StackNavigator.Screen
                name="AppDetails"
                component={AppDetailsScreen}
            />
            <StackNavigator.Screen
                name="MarketingChoices"
                component={MarketingChoicesScreen}
            />
            <StackNavigator.Screen
                name="DataConsent"
                component={DataConsentScreen}
            />
            <StackNavigator.Screen
                name="OpenBankingServices"
                component={OpenBankingServicesScreen}
            />
            <StackNavigator.Screen
                name="LegalInformation"
                component={LegalInformationScreen}
            />
            <StackNavigator.Screen
                name="RegularPayments"
                component={RegularPaymentsScreen}
            />
            <StackNavigator.Screen
                name="Statements"
                component={StatementsScreen}
            />
            <StackNavigator.Screen
                name="Inbox"
                component={InboxScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);