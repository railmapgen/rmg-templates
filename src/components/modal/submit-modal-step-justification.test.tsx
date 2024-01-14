import { render } from '../../test-utils';
import SubmitModalStepJustification from './submit-modal-step-justification';
import { screen } from '@testing-library/react';
import { Modal } from '@chakra-ui/react';

const mockCallbacks = {
    onHaveBeenOpenedChange: vi.fn(),
    onWillBeOpenedChange: vi.fn(),
    onRefSourceChange: vi.fn(),
    onRefLinkChange: vi.fn(),
    onJustificationChange: vi.fn(),
    onMajorUpdateJustificationChange: vi.fn(),
    onNext: vi.fn(),
};

describe('SubmitModalStepJustification', () => {
    it('Can disable next button if source is internet but link is empty', () => {
        render(
            <Modal isOpen={true} onClose={vi.fn()}>
                <SubmitModalStepJustification
                    haveBeenOpened={true}
                    willBeOpened={false}
                    refSource="STATION_WEB_IMAGE"
                    refLink=""
                    justification="Some justification"
                    majorUpdateJustifications={{}}
                    {...mockCallbacks}
                />
            </Modal>
        );
        expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
    });

    it('Can enable next button if source is upload but link is empty', () => {
        render(
            <Modal isOpen={true} onClose={vi.fn()}>
                <SubmitModalStepJustification
                    haveBeenOpened={true}
                    willBeOpened={false}
                    refSource="STATION_UPLOAD_IMAGE"
                    refLink=""
                    justification="Some justification"
                    majorUpdateJustifications={{}}
                    {...mockCallbacks}
                />
            </Modal>
        );
        expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled();
    });
});
