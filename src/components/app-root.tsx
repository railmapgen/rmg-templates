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
                <Routes>
                    <Route
                        path="/new"
                        element={
                            <RMWindow>
                                <TicketWindowHeader />
                                <RMErrorBoundary suspenseFallback={<LoadingOverlay visible />}>
                                    <TicketView />
                                </RMErrorBoundary>
                            </RMWindow>
                        }
                    />
                    <Route
                        path="/import"
                        element={
                            <RMWindow isAppClip>
                                <PickerWindowHeader />
                                <RMErrorBoundary suspenseFallback={<LoadingOverlay visible />}>
                                    <AppClipView />
                                </RMErrorBoundary>
                            </RMWindow>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <RMWindow>
                                <WindowHeader />
                                <RMErrorBoundary suspenseFallback={<LoadingOverlay visible />}>
                                    <TemplatesView />
                                </RMErrorBoundary>
                            </RMWindow>
                        }
                    />
                </Routes>
            </RMMantineProvider>
        </HashRouter>
    );
}
