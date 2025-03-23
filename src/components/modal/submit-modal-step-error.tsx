import classes from './submit-modal.module.css';
import { useTranslation } from 'react-i18next';
import { INVALID_REASON, InvalidReasonType } from '../../util/constant';
import useTranslatedName from '../hooks/use-translated-name';
import { Button, Group, List, Stack, Text, Title } from '@mantine/core';

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
            <Stack gap="xs" className={classes['step-body']}>
                <Text>{t('Your inputs contain the following errors. Please fix it before submitting.')}</Text>

                {companyErrors.length > 0 && (
                    <>
                        <Title order={3} size="h5">
                            {t('Railway company')}
                        </Title>
                        <List size="sm" withPadding aria-label="List of company errors">
                            {companyErrors.map((e, i) => (
                                <List.Item key={i}>{translateName(INVALID_REASON[e])}</List.Item>
                            ))}
                        </List>
                    </>
                )}

                {Object.values(templateErrors).flat().length > 0 && (
                    <>
                        <Title order={3} size="h5">
                            {t('Templates')}
                        </Title>
                        <List size="sm" withPadding aria-label="List of template errors">
                            {Object.entries(templateErrors).map(([item, errors]) => (
                                <List.Item key={item}>
                                    {item}
                                    <List size="sm" withPadding>
                                        {errors.map((e, i) => (
                                            <List.Item key={i}>{translateName(INVALID_REASON[e])}</List.Item>
                                        ))}
                                    </List>
                                </List.Item>
                            ))}
                        </List>
                    </>
                )}
            </Stack>
            <Group gap="sm" pt="xs">
                <Button variant="default" ml="auto" onClick={onClose}>
                    {t('Go back')}
                </Button>
            </Group>
        </>
    );
}
