import { render } from '../../test-utils';
import SubmitModalStepJustification from './submit-modal-step-justification';
import { screen } from '@testing-library/react';
import { Modal } from '@chakra-ui/react';
import { getInitialJustification, Justification } from './justification';

const mockCallbacks = {
    onJustificationUpdate: vi.fn(),
    onNext: vi.fn(),
};

describe('SubmitModalStepJustification', () => {
    it('Can disable next button if source is internet but link is empty', () => {
        const justification: Justification = {
            hasDiagramInStation: true,
            isOpened: true,
            soonToBeOpened: false,
            source: 'STATION_WEB_IMAGE',
            link: '',
            comments: 'Some justification',
            majorUpdateComments: {},
        };
        render(
            <Modal isOpen={true} onClose={vi.fn()}>
                <SubmitModalStepJustification justification={justification} {...mockCallbacks} />
            </Modal>
        );
        expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
    });

    it('Can enable next button if source is upload but link is empty', () => {
        const justification: Justification = {
            hasDiagramInStation: true,
            isOpened: true,
            soonToBeOpened: false,
            source: 'STATION_UPLOAD_IMAGE',
            link: '',
            comments: 'Some justification',
            majorUpdateComments: {},
        };
        render(
            <Modal isOpen={true} onClose={vi.fn()}>
                <SubmitModalStepJustification justification={justification} {...mockCallbacks} />
            </Modal>
        );
        expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled();
    });

    it('Do not render justification fields if acceptance criteria is not met', () => {
        const justification = {
            ...getInitialJustification(),
            hasDiagramInStation: false,
            isOpened: true,
            soonToBeOpened: false,
        };
        render(
            <Modal isOpen={true} onClose={vi.fn()}>
                <SubmitModalStepJustification justification={justification} {...mockCallbacks} />
            </Modal>
        );
        expect(screen.getByText(/Sorry/)).toBeInTheDocument();
    });
});
