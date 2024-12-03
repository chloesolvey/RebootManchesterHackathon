import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { MainStack } from './components/MainStack';
import { TabProvider } from './contexts/TabContext';
import { PaymentProvider } from './contexts/PaymentContext';

// Controls react-nativescript log verbosity.
// - true: all logs;
// - false: only error logs.
Object.defineProperty(global, '__DEV__', { value: false });

const AppWrapper = () => {
    return React.createElement(
        TabProvider,
        {},
        React.createElement(
            PaymentProvider,
            {},
            React.createElement(MainStack, {}, null)
        )
    );
};

ReactNativeScript.start(React.createElement(AppWrapper, {}, null));