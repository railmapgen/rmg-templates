import { vi } from 'vitest';
import { render } from '../../test-utils';
import { fireEvent, screen, within } from '@testing-library/react';
import OptionalLanguageEntries from './optional-language-entries';

const mockCallbacks = {
    onChange: vi.fn(),
};

describe('OptionalLanguageEntries', () => {
    afterEach(() => {
        vi.resetAllMocks();
    });

    it('Can disable existing languages as expected', () => {
        render(
            <OptionalLanguageEntries
                optionalName={[
                    ['ko', 'aaa'],
                    ['ja', 'bbb'],
                ]}
                {...mockCallbacks}
            />
        );

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
        render(<OptionalLanguageEntries optionalName={[]} {...mockCallbacks} />);

        expect(screen.queryByRole('button', { name: 'Add translation' })).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'Add more translations' }));
        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockCallbacks.onChange).toBeCalledWith([['ko', '']]);
    });

    it('Can add first available language to optional name', () => {
        render(
            <OptionalLanguageEntries
                optionalName={[
                    ['ko', ''],
                    ['ar', ''],
                ]}
                {...mockCallbacks}
            />
        );

        expect(screen.queryByRole('button', { name: 'Add more translations' })).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: 'Add translation' }));
        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockCallbacks.onChange).toBeCalledWith([
            ['ko', ''],
            ['ar', ''],
            ['az', ''],
        ]);
    });

    it('Can update translation language without change the order', () => {
        render(
            <OptionalLanguageEntries
                optionalName={[
                    ['ko', 'aaa'],
                    ['ja', 'bbb'],
                ]}
                {...mockCallbacks}
            />
        );

        fireEvent.change(screen.getByRole('combobox', { name: 'Language' }), { target: { value: 'fr' } });
        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockCallbacks.onChange).toBeCalledWith([
            ['fr', 'aaa'],
            ['ja', 'bbb'],
        ]);
    });
});
