import React from 'react';
import WindowHeader from './window-header';
import { useRootDispatch, useRootSelector } from '../redux';
import { RmgDebouncedInput, RmgLabel, RmgPage, RmgPageHeader, RmgWindow } from '@railmapgen/rmg-components';

export default function AppRoot() {
    const dispatch = useRootDispatch();
    const counter = useRootSelector(state => state.app.counter);

    return (
        <RmgWindow>
            <WindowHeader />
            <RmgPage>
                <RmgPageHeader>
                    <RmgLabel label="Quick filter">
                        <RmgDebouncedInput placeholder="Filter anything" />
                    </RmgLabel>
                </RmgPageHeader>
            </RmgPage>
        </RmgWindow>
    );
}
