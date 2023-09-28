import { addListener, configureStore, createListenerMiddleware, TypedAddListener } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import appReducer from './app/app-slice';
import ticketReducer from './ticket/ticket-slice';

const listenerMiddleware = createListenerMiddleware();

const store = configureStore({
    reducer: {
        app: appReducer,
        ticket: ticketReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;

export type RootDispatch = typeof store.dispatch;
export const useRootDispatch = () => useDispatch<RootDispatch>();
export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector;

export const addRootListener = addListener as TypedAddListener<RootState, RootDispatch>;

(window as any).rmgStore = store;
export default store;
