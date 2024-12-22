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
import { getMarkdownTable, Justification } from './justification';

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
    const linkColour = useColorModeValue('primary.500', 'primary.300');

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
