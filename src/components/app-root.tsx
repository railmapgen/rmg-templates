import { lazy } from 'react';
import { PickerWindowHeader, TicketWindowHeader, WindowHeader } from './window-header';
import { RmgErrorBoundary, RmgLoader, RmgThemeProvider, RmgWindow } from '@railmapgen/rmg-components';
import { HashRouter, Route, Routes } from 'react-router-dom';

const TemplatesView = lazy(() => import('./templates-view/templates-view'));
const AppClipView = lazy(() => import('./templates-view/app-clip-view'));
const TicketView = lazy(() => import('./ticket-view/ticket-view'));

export default function AppRoot() {
    return (
        <HashRouter>
            <RmgThemeProvider>
                <RmgWindow>
                    <Routes>
                        <Route
                            path="/new"
                            element={
                                <RmgErrorBoundary suspenseFallback={<RmgLoader isIndeterminate />}>
                                    <TicketWindowHeader />
                                    <TicketView />
                                </RmgErrorBoundary>
                            }
                        />
                        <Route
                            path="/import"
                            element={
                                <RmgErrorBoundary suspenseFallback={<RmgLoader isIndeterminate />}>
                                    <PickerWindowHeader />
                                    <AppClipView />
                                </RmgErrorBoundary>
                            }
                        />
                        <Route
                            path="/"
                            element={
                                <RmgErrorBoundary suspenseFallback={<RmgLoader isIndeterminate />}>
                                    <WindowHeader />
                                    <TemplatesView />
                                </RmgErrorBoundary>
                            }
                        />
                    </Routes>
                </RmgWindow>
            </RmgThemeProvider>
        </HashRouter>
    );
}
