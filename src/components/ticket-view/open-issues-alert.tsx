import classes from './open-issues-alert.module.css';
import { Alert, Anchor, List, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { GitHubIssue, OPEN_ISSUES_CACHE } from '../../services/github-api-service';
import { useRootSelector } from '../../redux';
import { ticketSelectors } from '../../redux/ticket/ticket-slice';
import { MdOutlineWarning } from 'react-icons/md';
import { formatDistanceToNow } from 'date-fns';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { zhCN } from 'date-fns/locale/zh-CN';
import { zhHK } from 'date-fns/locale/zh-HK';
import useTranslatedName from '../hooks/use-translated-name';
import { readIssueBody } from '../../redux/ticket/ticket-converters';

const getLocale = () => {
    switch (rmgRuntime.getLanguage()) {
        case 'zh-Hans':
            return zhCN;
        case 'zh-Hant':
            return zhHK;
        default:
            return undefined;
    }
};

export default function OpenIssuesAlert() {
    const { t } = useTranslation();
    const translateName = useTranslatedName();

    const { coreCompanyConfig, otherCompanyConfig } = useRootSelector(state => state.app);
    const ticket = useRootSelector(state => state.ticket);
    const [issues, setIssues] = useState<GitHubIssue[]>([]);

    useEffect(() => {
        OPEN_ISSUES_CACHE().then(setIssues);
    }, []);

    const companyName = ticketSelectors.getCompanyEnglishName(ticket, [...coreCompanyConfig, ...otherCompanyConfig]);
    const openIssues = issues.filter(issue => issue.title.endsWith(`New templates of ${companyName}`));

    if (ticket.company === 'new' || !openIssues.length) {
        return null;
    }

    return (
        <Alert
            color="orange"
            className={classes.alert}
            title={t('Uploaded templates pending for review') + ': ' + openIssues.length}
            icon={<MdOutlineWarning />}
        >
            <List classNames={{ itemWrapper: classes['item-wrapper'], itemLabel: classes['item-label'] }}>
                {openIssues.map(issue => (
                    <List.Item key={issue.number}>
                        <Anchor href={issue.html_url} target="_blank">
                            {issue.number} {readIssueBody(issue.body).map(translateName).join(', ')}
                        </Anchor>
                        <Text component="span" className={classes.created}>
                            {formatDistanceToNow(issue.created_at, { addSuffix: true, locale: getLocale() })}
                        </Text>
                    </List.Item>
                ))}
            </List>
        </Alert>
    );
}
