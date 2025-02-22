import classes from './submit-modal.module.css';
import { useTranslation } from 'react-i18next';
import { GITHUB_ISSUE_PREAMBLE } from '../../util/constant';
import { MdChevronLeft, MdContentCopy, MdOpenInNew } from 'react-icons/md';
import { getMarkdownTable, Justification } from './justification';
import { Anchor, Button, Group, List, Stack, Text } from '@mantine/core';

interface SubmitModalStepSubmitProps {
    companyName: string;
    companyBlock: HTMLDetailsElement | null;
    templateBlocks: HTMLDetailsElement[];
    justification: Justification;
    onPrev: () => void;
    onClose: () => void;
}

export default function SubmitModalStepSubmit(props: SubmitModalStepSubmitProps) {
    const { companyName, companyBlock, templateBlocks, justification, onPrev, onClose } = props;

    const { t } = useTranslation();

    const issueBody = [
        getMarkdownTable(justification),
        GITHUB_ISSUE_PREAMBLE,
        companyBlock?.outerHTML ?? '',
        ...templateBlocks.map(block => block.outerHTML),
    ].join('\n\n');

    const manualSearchParams = new URLSearchParams({
        template: 'new-templates-request.md',
        labels: 'resources',
        title: 'Resources: New templates of ' + companyName,
    });

    const handleCopy = async () => {
        await navigator.clipboard.writeText(issueBody);
    };

    return (
        <>
            <Stack gap="xs" className={classes['step-body']}>
                <Text>{t('Follow the instructions below to open an Issue') + ':'}</Text>
                <List type="ordered" withPadding>
                    <List.Item>
                        {t('Open')}{' '}
                        <Anchor
                            href={
                                'https://github.com/railmapgen/rmg-templates/issues/new?' +
                                manualSearchParams.toString()
                            }
                            target="_blank"
                        >
                            Issue: New Templates Request <MdOpenInNew />
                        </Anchor>
                    </List.Item>
                    <List.Item>
                        {t('Click copy button and paste into issue body')}{' '}
                        <Button size="xs" variant="light" leftSection={<MdContentCopy />} onClick={handleCopy}>
                            {t('Copy')}
                        </Button>
                    </List.Item>
                </List>
            </Stack>
            <Group gap="sm" pt="xs">
                <Button variant="default" onClick={onPrev} leftSection={<MdChevronLeft />}>
                    {t('Previous')}
                </Button>
                <Button ml="auto" onClick={onClose}>
                    {t('Close')}
                </Button>
            </Group>
        </>
    );
}
