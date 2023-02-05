import rootReducer from '../index';
import ticketReducer, { addTemplate, setTemplateLineById, TicketState } from './ticket-slice';

const realStore = rootReducer.getState();

describe('TicketSlice', () => {
    const initialState: TicketState = {
        ...realStore.ticket,
        company: 'mtr',
    };

    it('Can populate template names when selecting line', () => {
        // step 1: add template
        let state = ticketReducer(initialState, addTemplate());

        // step 2: select exiting line
        const templateId = state.templates[0].id;
        state = ticketReducer(
            state,
            setTemplateLineById({ id: templateId, line: 'twl', name: { en: 'Tsuen Wan Line' } })
        );

        expect(state.templates[0].templateName).toHaveProperty('en', 'Tsuen Wan Line');
    });
});
