import { vi } from 'vitest';
import { render } from '../../test-utils';
import TemplateEntryCard from './template-entry-card';
import { fireEvent, screen, within } from '@testing-library/react';
import { initTemplateEntry, TemplateTicketEntry } from '../../redux/ticket/ticket-slice';

const mockCallbacks = {
    onLineChange: vi.fn(),
    onNewLineChange: vi.fn(),
    onMajorFlagChange: vi.fn(),
    onLineNameChange: vi.fn(),
    onOptionalNameChange: vi.fn(),
    onParamChange: vi.fn(),
    onParamImport: vi.fn(),
    onRemove: vi.fn(),
};

describe('TemplateEntryCard', () => {
    describe('TemplateEntryCard - optionalName', () => {
        afterEach(() => {
            vi.resetAllMocks();
        });

        it('Can disable existing languages as expected', () => {
            const mockTemplateEntry: TemplateTicketEntry = {
                ...initTemplateEntry(),
                optionalName: [
                    ['ko', 'aaa'],
                    ['ja', 'bbb'],
                ],
            };
            render(<TemplateEntryCard company="new" templateEntry={mockTemplateEntry} {...mockCallbacks} />);

            const languageGroup0 = screen.getAllByRole('group', { name: 'Language' })[0];
            expect(within(languageGroup0).getByRole('combobox')).toHaveDisplayValue('Korean');
            expect(within(languageGroup0).getByRole('option', { name: 'English' })).toBeDisabled();
            expect(within(languageGroup0).getByRole('option', { name: 'Simplified Chinese' })).toBeDisabled();
            expect(within(languageGroup0).getByRole('option', { name: 'Traditional Chinese' })).toBeDisabled();
            expect(within(languageGroup0).getByRole('option', { name: 'Japanese' })).toBeDisabled();
            expect(within(languageGroup0).getByRole('option', { name: 'Korean' })).not.toBeDisabled();

            const languageGroup1 = screen.getAllByRole('group', { name: 'Language' })[1];
            expect(within(languageGroup1).getByRole('combobox')).toHaveDisplayValue('Japanese');
            expect(within(languageGroup1).getByRole('option', { name: 'English' })).toBeDisabled();
            expect(within(languageGroup1).getByRole('option', { name: 'Simplified Chinese' })).toBeDisabled();
            expect(within(languageGroup1).getByRole('option', { name: 'Traditional Chinese' })).toBeDisabled();
            expect(within(languageGroup1).getByRole('option', { name: 'Korean' })).toBeDisabled();
            expect(within(languageGroup1).getByRole('option', { name: 'Japanese' })).not.toBeDisabled();
        });

        it('Can add optional language (Korean) to optional name when empty', () => {
            const mockTemplateEntry: TemplateTicketEntry = {
                ...initTemplateEntry(),
                optionalName: [],
            };
            render(<TemplateEntryCard company="new" templateEntry={mockTemplateEntry} {...mockCallbacks} />);

            expect(screen.queryByRole('button', { name: 'Add translation' })).not.toBeInTheDocument();

            fireEvent.click(screen.getByRole('button', { name: 'Add more translations' }));
            expect(mockCallbacks.onOptionalNameChange).toBeCalledTimes(1);
            expect(mockCallbacks.onOptionalNameChange).toBeCalledWith([['ko', '']]);
        });

        it('Can add first available language to optional name', () => {
            const mockTemplateEntry: TemplateTicketEntry = {
                ...initTemplateEntry(),
                optionalName: [
                    ['ko', ''],
                    ['ar', ''],
                ],
            };
            render(<TemplateEntryCard company="new" templateEntry={mockTemplateEntry} {...mockCallbacks} />);

            expect(screen.queryByRole('button', { name: 'Add more translations' })).not.toBeInTheDocument();

            fireEvent.click(screen.getByRole('button', { name: 'Add translation' }));
            expect(mockCallbacks.onOptionalNameChange).toBeCalledTimes(1);
            expect(mockCallbacks.onOptionalNameChange).toBeCalledWith([
                ['ko', ''],
                ['ar', ''],
                ['az', ''],
            ]);
        });

        it('Can update translation language without change the order', () => {
            const mockTemplateEntry: TemplateTicketEntry = {
                ...initTemplateEntry(),
                optionalName: [
                    ['ko', 'aaa'],
                    ['ja', 'bbb'],
                ],
            };
            render(<TemplateEntryCard company="new" templateEntry={mockTemplateEntry} {...mockCallbacks} />);

            fireEvent.change(screen.getByRole('combobox', { name: 'Language' }), { target: { value: 'fr' } });
            expect(mockCallbacks.onOptionalNameChange).toBeCalledTimes(1);
            expect(mockCallbacks.onOptionalNameChange).toBeCalledWith([
                ['fr', 'aaa'],
                ['ja', 'bbb'],
            ]);
        });
    });
});
