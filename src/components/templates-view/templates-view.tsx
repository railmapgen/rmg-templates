import PageHeader from './page-header';
import TemplatesGrid from '../ag-grid/templates-grid';
import { RmgPage } from '@railmapgen/rmg-components';

export default function TemplatesView() {
    return (
        <RmgPage>
            <PageHeader />
            <TemplatesGrid />
        </RmgPage>
    );
}
