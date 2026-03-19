import { render } from '../../test-utils';
import { screen, within } from '@testing-library/react';
import OptionalLanguageEntries from './optional-language-entries';
import { userEvent } from '@testing-library/user-event';

const mockCallbacks = {
    onChange: vi.fn(),
};

describe('OptionalLanguageEntries', () => {
    const user = userEvent.setup();

    afterEach(() => {
        vi.resetAllMocks();
    });

    it('Can disable existing languages as expected', async () => {
        render(
            <OptionalLanguageEntries
                optionalName={[
                    ['ko', 'aaa'],
                    ['ja', 'bbb'],
                ]}
                {...mockCallbacks}
            />
        );

        const language1 = screen.getAllByRole('textbox', { name: 'Language' })[0];
        expect(language1).toHaveValue('Korean');
        await user.click(language1);
        const listbox = screen.getAllByLabelText('Language').find(el => el.role === 'listbox')!;
        ['English', 'Simplified Chinese', 'Traditional Chinese', 'Japanese', 'Korean'].forEach(lang => {
            expect(within(listbox).getByText(lang).parentElement).toHaveAttribute('data-combobox-disabled', 'true');
        });
    });

    it('Can add optional language (Korean) to optional name when empty', async () => {
        render(<OptionalLanguageEntries optionalName={[]} {...mockCallbacks} />);

        await user.click(screen.getByRole('button', { name: 'Add a name in another language' }));
        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockCallbacks.onChange).toBeCalledWith([['ko', '']]);
    });

    it('Can add first available language to optional name', async () => {
        render(
            <OptionalLanguageEntries
                optionalName={[
                    ['ko', ''],
                    ['ar', ''],
                ]}
                {...mockCallbacks}
            />
        );

        await user.click(screen.getByRole('button', { name: 'Add a name in another language' }));
        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockCallbacks.onChange).toBeCalledWith([
            ['ko', ''],
            ['ar', ''],
            ['az', ''],
        ]);
    });

    it('Can update translation language without change the order', async () => {
        render(
            <OptionalLanguageEntries
                optionalName={[
                    ['ko', 'aaa'],
                    ['ja', 'bbb'],
                ]}
                {...mockCallbacks}
            />
        );

        await user.click(screen.getAllByRole('textbox', { name: 'Language' })[0]);
        await user.click(screen.getAllByText('French')[0]);
        expect(mockCallbacks.onChange).toBeCalledTimes(1);
        expect(mockCallbacks.onChange).toBeCalledWith([
            ['fr', 'aaa'],
            ['ja', 'bbb'],
        ]);
    });
});
