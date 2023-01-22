import { Button, Heading, HStack, ListItem, ModalBody, ModalFooter, Text, UnorderedList } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { INVALID_REASON, InvalidReasonType } from '../../util/constant';
import useTranslatedName from '../hooks/use-translated-name';

interface SubmitModalStepErrorProps {
    companyErrors: InvalidReasonType[];
    templateErrors: Record<string, InvalidReasonType[]>;
    onClose: () => void;
}

export default function SubmitModalStepError(props: SubmitModalStepErrorProps) {
    const { companyErrors, templateErrors, onClose } = props;

    const { t } = useTranslation();
    const translateName = useTranslatedName();

    return (
        <>
            <ModalBody>
                <Text>
                    {t('Your inputs contain the following errors. Please consider fixing it before submitting.')}
                </Text>

                {companyErrors.length > 0 && (
                    <>
                        <Heading as="h5" size="sm" my={2}>
                            {t('Railway company')}
                        </Heading>
                        <UnorderedList aria-label="List of company errors">
                            {companyErrors.map((e, i) => (
                                <ListItem key={i}>{translateName(INVALID_REASON[e])}</ListItem>
                            ))}
                        </UnorderedList>
                    </>
                )}

                {Object.values(templateErrors).flat().length > 0 && (
                    <>
                        <Heading as="h5" size="sm" my={2}>
                            {t('Templates')}
                        </Heading>
                        <UnorderedList aria-label="List of template errors">
                            {Object.entries(templateErrors).map(([item, errors]) => (
                                <ListItem key={item}>
                                    {item}
                                    <UnorderedList>
                                        {errors.map((e, i) => (
                                            <ListItem key={i}>{translateName(INVALID_REASON[e])}</ListItem>
                                        ))}
                                    </UnorderedList>
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </>
                )}
            </ModalBody>
            <ModalFooter>
                <HStack>
                    <Button colorScheme="primary" onClick={onClose}>
                        {t('Go back')}
                    </Button>
                </HStack>
            </ModalFooter>
        </>
    );
}
