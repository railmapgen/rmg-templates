import PageHeader from './page-header';
import { RmgPage } from '@railmapgen/rmg-components';
import TemplatesGrid from './templates-grid';

export default function TemplatesView() {
    return (
        <RmgPage>
            <PageHeader />
            <TemplatesGrid />
        </RmgPage>
    );
}
