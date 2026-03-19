import PageHeader from './page-header';
import TemplatesGrid from './templates-grid';
import { RMPage } from '@railmapgen/mantine-components';

export default function TemplatesView() {
    return (
        <RMPage>
            <PageHeader />
            <TemplatesGrid />
        </RMPage>
    );
}
