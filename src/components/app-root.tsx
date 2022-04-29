import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import WindowHeader from './window-header';
import { useRootDispatch, useRootSelector } from '../redux';
import { bumpCounter } from '../redux/app/app-slice';

export default function AppRoot() {
    const dispatch = useRootDispatch();
    const counter = useRootSelector(state => state.app.counter);

    return (
        <Flex direction="column" height="100%" overflow="hidden">
            <WindowHeader />
            This is a seed project for RMG with React framework.
            <br />
            Please replace any "RMG Seed Project" or "seed-project" with the correct component name.
            <br />
            Chakra UI and Redux store are setup already. Here's an example state: {counter}.
            <br />
            <Button onClick={() => dispatch(bumpCounter())}>Bump</Button>
        </Flex>
    );
}
