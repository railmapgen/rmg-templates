import { RmgAgGrid } from '@railmapgen/rmg-components';
import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { TemplateEntry } from '@railmapgen/rmg-templates-resources';
import { useRootSelector } from '../../redux';
import { ColDef } from 'ag-grid-community';
import { useTranslation } from 'react-i18next';
import useTranslatedName from '../hooks/use-translated-name';
import { Avatar, Badge, Tag, TagLabel } from '@chakra-ui/react';
import useTemplates from '../hooks/use-templates';

export default function TemplatesGrid() {
    const { t, i18n } = useTranslation();
    const translateName = useTranslatedName();

    const { selectedCompany } = useRootSelector(state => state.app);
    const { templates } = useTemplates(selectedCompany);

    const columnDefs = useMemo<ColDef<TemplateEntry>[]>(
        () => [
            {
                headerName: t('Name'),
                field: 'name',
                valueFormatter: ({ value }: { value: TemplateEntry['name'] }) => translateName(value),
                sortable: true,
                flex: 1,
            },
            {
                headerName: t('Uploader'),
                field: 'uploadBy',
                cellRenderer: ({ value }: { value: TemplateEntry['uploadBy'] }) => (
                    <Tag
                        key={value}
                        size="lg"
                        borderRadius="full"
                        onClick={() =>
                            window.open(
                                `https://github.com/railmapgen/rmg-templates/issues?q=is:issue+author:${value}`,
                                '_blank'
                            )
                        }
                        cursor="pointer"
                    >
                        <Avatar src={`https://github.com/${value}.png`} size="xs" ml={-1} mr={2} />
                        <TagLabel>{value}</TagLabel>
                    </Tag>
                ),
                minWidth: 200,
            },
            {
                headerName: t('Style'),
                field: 'style',
                cellRenderer: ({ value }: { value: TemplateEntry['style'] }) => <Badge>{value}</Badge>,
                minWidth: 150,
            },
        ],
        [i18n.language]
    );

    const defaultColDef = useMemo(() => ({ resizable: true }), []);

    return (
        <RmgAgGrid>
            <AgGridReact
                rowData={templates}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                getRowId={({ data }) => data.filename}
                headerHeight={36}
                rowHeight={36}
                suppressCellFocus={true}
                suppressRowVirtualisation={true}
                debug={import.meta.env.DEV}
            />
        </RmgAgGrid>
    );
}
