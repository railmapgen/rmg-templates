import { lazy } from 'react';
import { PickerWindowHeader, TicketWindowHeader, WindowHeader } from './window-header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { RMErrorBoundary, RMMantineProvider, RMWindow } from '@railmapgen/mantine-components';
import { LoadingOverlay } from '@mantine/core';

const TemplatesView = lazy(() => import('./templates-view/templates-view'));
const AppClipView = lazy(() => import('./templates-view/app-clip-view'));
const TicketView = lazy(() => import('./ticket-view/ticket-view'));

export default function AppRoot() {
    return (
        <HashRouter>
            <RMMantineProvider>
                <RMWindow>
                    <Routes>
                        <Route
                            path="/new"
                            element={
                                <RMErrorBoundary suspenseFallback={<LoadingOverlay visible />}>
                                    <TicketWindowHeader />
                                    <TicketView />
                                </RMErrorBoundary>
                            }
                        />
                        <Route
                            path="/import"
                            element={
                                <RMErrorBoundary suspenseFallback={<LoadingOverlay visible />}>
                                    <PickerWindowHeader />
                                    <AppClipView />
                                </RMErrorBoundary>
                            }
                        />
                        <Route
                            path="/"
                            element={
                                <RMErrorBoundary suspenseFallback={<LoadingOverlay visible />}>
                                    <WindowHeader />
                                    <TemplatesView />
                                </RMErrorBoundary>
                            }
                        />
                    </Routes>
                </RMWindow>
            </RMMantineProvider>
        </HashRouter>
    );
}
