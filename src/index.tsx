import rmgRuntime from '@railmapgen/rmg-runtime';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import AppRoot from './components/app-root';
import store from './redux';
import i18n from './i18n/config';
import { createRoot, Root } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import initStore from './redux/init';
import './index.css';

let root: Root;

const renderApp = () => {
    root = createRoot(document.getElementById('root') as HTMLDivElement);
    root.render(
        <StrictMode>
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <AppRoot />
                </I18nextProvider>
            </Provider>
        </StrictMode>
    );
};

rmgRuntime
    .ready()
    .then(() => {
        return initStore(store);
    })
    .then(() => {
        renderApp();
        rmgRuntime.injectUITools();
    });
