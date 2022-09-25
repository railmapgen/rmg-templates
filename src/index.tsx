import rmgRuntime from '@railmapgen/rmg-runtime';
import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import AppRoot from './components/app-root';
import store from './redux';
import i18n from './i18n/config';
import { createRoot, Root } from 'react-dom/client';
import { rmgChakraTheme } from '@railmapgen/rmg-components';
import { I18nextProvider } from 'react-i18next';
import initStore from './redux/init';

let root: Root;

const renderApp = () => {
    root = createRoot(document.getElementById('root') as HTMLDivElement);
    root.render(
        <StrictMode>
            <Provider store={store}>
                <ChakraProvider theme={rmgChakraTheme}>
                    <I18nextProvider i18n={i18n}>
                        <AppRoot />
                    </I18nextProvider>
                </ChakraProvider>
            </Provider>
        </StrictMode>
    );
};

rmgRuntime.ready().then(() => {
    initStore(store);
    renderApp();
    rmgRuntime.injectCss();
});
