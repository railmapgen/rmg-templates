import '@testing-library/jest-dom';
import { ReactElement, ReactNode } from 'react';
import { render, renderHook, RenderOptions } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import { Provider } from 'react-redux';
import { createTestStore } from './setupTests';
import { Store } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
    store: Store;
    route?: string;
}

const initialOptions: CustomRenderOptions = {
    store: createTestStore(),
};

interface TestingProviderProps {
    children?: ReactNode;
    store: Store;
    route?: string;
}

export const TestingProvider = (props: TestingProviderProps) => {
    const { children, store, route } = props;

    return (
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                <MemoryRouter initialEntries={[route ?? '/']}>
                    <MantineProvider>{children}</MantineProvider>
                </MemoryRouter>
            </Provider>
        </I18nextProvider>
    );
};

const customRender = (ui: ReactElement, { store, route, ...renderOptions } = initialOptions) => {
    return render(ui, {
        wrapper: props => <TestingProvider store={store} route={route} {...props} />,
        ...renderOptions,
    });
};

const customRenderHook = <Props, Result>(
    render: (initialProps: Props) => Result,
    { store, ...renderOptions } = initialOptions
) => {
    return renderHook(render, { wrapper: props => <TestingProvider store={store} {...props} />, ...renderOptions });
};

export { customRender as render, customRenderHook as renderHook };
