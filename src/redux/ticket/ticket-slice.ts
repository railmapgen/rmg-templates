import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CompanyEntry, TemplateEntry } from '@railmapgen/rmg-templates-resources';
import { convertCompanyEntry, convertTemplateEntry } from './ticket-converters';
import { InvalidReasonType } from '../../util/constant';
import { Translation } from '@railmapgen/rmg-translate';

export const ALL_ACCEPTED_LANGS = {
    en: 'English',
    'zh-Hans': 'Simplified Chinese',
    'zh-Hant': 'Traditional Chinese',
    ko: 'Korean',
};
export type AcceptedLang = keyof typeof ALL_ACCEPTED_LANGS;

export interface TemplateTicketEntry {
    id: string;
    line: string; // new, existing line
    newLine: string;
    majorUpdate: boolean;
    templateName: typeof ALL_ACCEPTED_LANGS;
    param?: Record<string, any>;
}

const initTemplateEntry = (): TemplateTicketEntry => ({
    id: crypto.randomUUID(),
    line: '',
    newLine: '',
    majorUpdate: false,
    templateName: { en: '', 'zh-Hans': '', 'zh-Hant': '', ko: '' },
    param: undefined,
});

export interface TicketState {
    // company
    company: string; // new, (empty), companyCode
    newCompany: string;
    companyName: typeof ALL_ACCEPTED_LANGS;

    // templates
    templates: TemplateTicketEntry[];
}

const initialState: TicketState = {
    company: '',
    newCompany: '',
    companyName: { en: '', 'zh-Hans': '', 'zh-Hant': '', ko: '' },
    templates: [],
};

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        setCompany: (state, action: PayloadAction<string>) => {
            state.company = action.payload;
        },

        setNewCompany: (state, action: PayloadAction<string>) => {
            state.newCompany = action.payload;
        },

        setCompanyNameByLang: (state, action: PayloadAction<{ lang: AcceptedLang; name: string }>) => {
            const { lang, name } = action.payload;
            state.companyName[lang] = name;
        },

        addTemplate: state => {
            state.templates.push(initTemplateEntry());
        },

        setTemplateLineById: (
            state,
            action: PayloadAction<{ id: string; line: string; name?: Partial<Translation> }>
        ) => {
            const { id, line, name } = action.payload;
            const nextEntry = { ...(state.templates.find(entry => entry.id === id) ?? initTemplateEntry()), line };

            // populate line names
            if (name) {
                nextEntry.templateName.en = name.en ?? '';
                nextEntry.templateName['zh-Hans'] = name['zh-Hans'] ?? '';
                nextEntry.templateName['zh-Hant'] = name['zh-Hant'] ?? name['zh-HK'] ?? name['zh-TW'] ?? '';
                nextEntry.templateName.ko = name.ko ?? '';
            }

            state.templates = state.templates.map(entry => (entry.id === id ? nextEntry : entry));
        },

        setTemplateNewLineById: (state, action: PayloadAction<{ id: string; newLine: string }>) => {
            state.templates = state.templates.map(entry =>
                entry.id === action.payload.id ? { ...entry, newLine: action.payload.newLine } : entry
            );
        },

        setTemplateMajorFlagById: (state, action: PayloadAction<{ id: string; majorUpdate: boolean }>) => {
            state.templates = state.templates.map(entry =>
                entry.id === action.payload.id
                    ? {
                          ...entry,
                          majorUpdate: action.payload.majorUpdate,
                      }
                    : entry
            );
        },

        setTemplateLineNameById: (state, action: PayloadAction<{ id: string; lang: string; name: string }>) => {
            state.templates = state.templates.map(entry =>
                entry.id === action.payload.id
                    ? {
                          ...entry,
                          templateName: { ...entry.templateName, [action.payload.lang]: action.payload.name },
                      }
                    : entry
            );
        },

        setTemplateParamById: (state, action: PayloadAction<{ id: string; param: Record<string, any> }>) => {
            state.templates = state.templates.map(entry =>
                entry.id === action.payload.id ? { ...entry, param: action.payload.param } : entry
            );
        },

        removeTemplate: (state, action: PayloadAction<string>) => {
            state.templates = state.templates.filter(entry => entry.id !== action.payload);
        },

        resetTicket: () => initialState,
    },
});

export const ticketSelectors = {
    getCompanyEnglishName: (state: TicketState, companyConfig: CompanyEntry[]): string => {
        return state.company === 'new'
            ? state.companyName.en // new company
            : companyConfig.find(c => c.id === state.company)?.name?.en ?? ''; // existing company
    },

    getCompanyBlock: (state: TicketState): HTMLDetailsElement | null => {
        if (state.company !== 'new') {
            return null;
        }
        return convertCompanyEntry({ id: state.newCompany, name: state.companyName });
    },

    getTemplateBlocks: (state: TicketState): HTMLDetailsElement[] => {
        const company = state.company === 'new' ? state.newCompany : state.company;
        return state.templates.map(entry => {
            const line = entry.line === 'new' ? entry.newLine : entry.line;
            const major = entry.line !== 'new' && entry.majorUpdate;
            return convertTemplateEntry(company, line, major, entry.templateName, entry.param);
        });
    },

    getCompanyErrors: (state: TicketState): InvalidReasonType[] => {
        const result: InvalidReasonType[] = [];
        const { company, newCompany, companyName } = state;

        if (!company || (company === 'new' && !newCompany)) {
            result.push('COMPANY_CODE_UNDEFINED');
        }

        if (company === 'new' && Object.values(companyName).some(value => !value)) {
            result.push('COMPANY_NAME_INCOMPLETE');
        }

        return result;
    },

    getTemplateErrors: (state: TicketState): Record<string, InvalidReasonType[]> => {
        const result: Record<string, InvalidReasonType[]> = { Overall: [] };
        const { templates } = state;

        if (templates.length === 0) {
            result['Overall'].push('TEMPLATE_SECTION_EMPTY');
        }

        if (templates.some(entry => !entry.line || (entry.line === 'new' && !entry.newLine))) {
            result['Overall'].push('TEMPLATE_CODE_UNDEFINED');
        }

        if (
            new Set(templates.map(entry => (entry.line === 'new' ? entry.newLine : entry.line))).size !==
            templates.length
        ) {
            result['Overall'].push('TEMPLATE_CODE_DUPLICATED');
        }

        templates.forEach(entry => {
            const errors: InvalidReasonType[] = [];
            if (Object.values(entry.templateName).some(value => !value)) {
                errors.push('TEMPLATE_NAME_INCOMPLETE');
            }

            if (!entry.param) {
                errors.push('TEMPLATE_PARAM_UNDEFINED');
            }
            result['Line ' + entry.line || entry.newLine] = errors;
        });

        return result;
    },

    getMajorUpdateNames: (state: TicketState, templateList: Record<string, TemplateEntry[]>): string[] => {
        const { company, templates } = state;
        if (company === 'new') {
            return [];
        }

        return templates
            .filter(entry => entry.majorUpdate && entry.line !== 'new')
            .map(entry => {
                const names = templateList[company].find(t => t.filename === entry.line)?.name;
                if (names) {
                    return Object.values(names).join('/');
                } else {
                    return entry.line;
                }
            });
    },
};

export const {
    setCompany,
    setNewCompany,
    setCompanyNameByLang,
    addTemplate,
    setTemplateLineById,
    setTemplateNewLineById,
    setTemplateMajorFlagById,
    setTemplateLineNameById,
    setTemplateParamById,
    removeTemplate,
    resetTicket,
} = ticketSlice.actions;
export default ticketSlice.reducer;
