import React from 'react';
import WindowHeader from './window-header';
import { RmgPage, RmgWindow } from '@railmapgen/rmg-components';
import TemplatesGrid from './ag-grid/templates-grid';
import PageHeader from './page-header';

export default function AppRoot() {
    return (
        <RmgWindow>
            <WindowHeader />
            <RmgPage>
                <PageHeader />
                <TemplatesGrid />
            </RmgPage>
        </RmgWindow>
    );
}
