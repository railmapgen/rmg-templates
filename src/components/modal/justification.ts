import { REFERENCE_SOURCE_DISPLAY_TEXT, ReferenceSource } from '../../util/constant';

export type Justification = {
    hasDiagramInStation: boolean;
    isOpened: boolean;
    soonToBeOpened: boolean;
    source: ReferenceSource | '';
    link: string;
    comments: string;
    majorUpdateComments: Record<string, string>;
};

export type JustificationUpdateHandler = <T extends keyof Justification>(key: T, value: Justification[T]) => void;

const initialJustification: Justification = {
    hasDiagramInStation: false,
    isOpened: false,
    soonToBeOpened: false,
    source: '',
    link: '',
    comments: '',
    majorUpdateComments: {},
};

export const getInitialJustification = () => initialJustification;

export const meetAcceptanceCriteria = (justification: Justification): boolean => {
    const isOpeningStatusMet = justification.isOpened || justification.soonToBeOpened;
    return justification.hasDiagramInStation && isOpeningStatusMet;
};

export const isJustificationValid = (justification: Justification): boolean => {
    const isAcceptanceCriteriaMet = meetAcceptanceCriteria(justification);
    const isRefOk = justification.source === 'STATION_UPLOAD_IMAGE' || (justification.source && justification.link);
    const isMajorUpdateJustified = Object.values(justification.majorUpdateComments).every(value => !!value);
    return Boolean(isAcceptanceCriteriaMet && isRefOk && justification.comments && isMajorUpdateJustified);
};

export const getMarkdownTable = (justification: Justification) => {
    const { hasDiagramInStation, isOpened, soonToBeOpened, source, link, comments, majorUpdateComments } =
        justification;
    return `| Item | Value |
|---|---|
| Route map in stations | ${hasDiagramInStation ? 'Yes' : 'No'} |
|    Opening status     | ${isOpened ? 'Opened' : soonToBeOpened ? 'To be opened' : 'Not yet opened'} |
| Reference source type | ${source ? REFERENCE_SOURCE_DISPLAY_TEXT[source].en : 'Not selected'} |
|     Reference link    | ${link} |
|     Justification     | ${comments.replaceAll('\n', '<br>')} |
${Object.entries(majorUpdateComments)
    .map(([line, value]) => `| Major update of ${line} | ${value.replaceAll('\n', '<br.')} |`)
    .join('\n')}`;
};
