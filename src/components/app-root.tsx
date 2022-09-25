import { Button, Flex, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import WindowHeader from './window-header';
import { useRootDispatch, useRootSelector } from '../redux';
import { bumpCounter } from '../redux/app/app-slice';
import { companyConfig, templateList } from '@railmapgen/rmg-templates-resources';

export default function AppRoot() {
    const dispatch = useRootDispatch();
    const counter = useRootSelector(state => state.app.counter);

    return (
        <Flex direction="column" height="100%" overflow="hidden">
            <WindowHeader />
            This is a seed project for RMG with React framework.
            <br />
            Please replace any "RMG Templates" or "rmg-templates" with the correct component name.
            <br />
            Chakra UI and Redux store are setup already. Here's an example state: {counter}.
            <br />
            <Button onClick={() => dispatch(bumpCounter())}>Bump</Button>
            <List>
                {companyConfig.map(company => (
                    <ListItem key={company.id}>
                        {company.name.en}
                        <List>
                            {templateList[company.id].map(template => (
                                <ListItem key={template.filename}>
                                    {template.filename}, author: {template.updatedBy ?? 'unknown'}
                                </ListItem>
                            ))}
                        </List>
                    </ListItem>
                ))}
            </List>
        </Flex>
    );
}
