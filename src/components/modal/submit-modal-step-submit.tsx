import { useTranslation } from 'react-i18next';
import {
    Button,
    Icon,
    Link,
    ListItem,
    ModalBody,
    ModalFooter,
    OrderedList,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { GITHUB_ISSUE_PREAMBLE } from '../../util/constant';
import { MdChevronLeft, MdContentCopy, MdOpenInNew } from 'react-icons/md';

interface SubmitModalStepSubmitProps {
    companyName: string;
    companyBlock: HTMLDetailsElement | null;
    templateBlocks: HTMLDetailsElement[];
    justification: string;
    majorUpdateJustifications: Record<string, string>;
    onPrev: () => void;
    onClose: () => void;
}

export default function SubmitModalStepSubmit(props: SubmitModalStepSubmitProps) {
    const { companyName, companyBlock, templateBlocks, justification, majorUpdateJustifications, onPrev, onClose } =
        props;

    const { t } = useTranslation();
    const linkColour = useColorModeValue('primary.500', 'primary.300');

    const issueBody = [
        `**Justification:** ${justification || '(REPLACE ME)'}`,
        Object.entries(majorUpdateJustifications)
            .map(([line, value]) => `- Major update of ${line}: ${value}`)
            .join('\n'),
        GITHUB_ISSUE_PREAMBLE,
        companyBlock?.outerHTML ?? '',
        ...templateBlocks.map(block => block.outerHTML),
    ].join('\n\n');

    const manualSearchParams = new URLSearchParams({
        template: 'new-templates-request.md',
        label: 'resources',
        title: 'Resources: New templates of ' + companyName,
    });

    const handleCopy = async () => {
        await navigator.clipboard.writeText(issueBody);
    };

    return (
        <>
            <ModalBody>
                <Text>{t('Follow the instructions below to open an Issue') + ':'}</Text>
                <OrderedList>
                    <ListItem>
                        {t('Open')}{' '}
                        <Link
                            color={linkColour}
                            href={
                                'https://github.com/railmapgen/rmg-templates/issues/new?' +
                                manualSearchParams.toString()
                            }
                            isExternal={true}
                        >
                            Issue: New Templates Request <Icon as={MdOpenInNew} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        {t('Click copy button and paste into issue body')}{' '}
                        <Button size="xs" leftIcon={<MdContentCopy />} onClick={handleCopy}>
                            {t('Copy')}
                        </Button>
                    </ListItem>
                </OrderedList>
            </ModalBody>
            <ModalFooter>
                <Button variant="ghost" onClick={onPrev} mr="auto" leftIcon={<MdChevronLeft />}>
                    {t('Previous')}
                </Button>
                <Button colorScheme="primary" onClick={onClose}>
                    {t('Close')}
                </Button>
            </ModalFooter>
        </>
    );
}
