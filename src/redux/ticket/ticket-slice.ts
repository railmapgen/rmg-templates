import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { templateList } from '@railmapgen/rmg-templates-resources';

export const ALL_ACCEPTED_LANGS = { en: 'English', 'zh-Hans': 'Simplified Chinese', 'zh-Hant': 'Traditional Chinese' };
export type AcceptedLang = keyof typeof ALL_ACCEPTED_LANGS;

export interface TemplateEntry {
    id: string;
    line: string; // new, existing line
    newLine: string;
    templateName: typeof ALL_ACCEPTED_LANGS;
    param?: Record<string, any>;
}

const initTemplateEntry = (): TemplateEntry => ({
    id: crypto.randomUUID(),
    line: '',
    newLine: '',
    templateName: { en: '', 'zh-Hans': '', 'zh-Hant': '' },
    param: undefined,
});

export interface TicketState {
    // company
    company: string; // new, (empty), companyCode
    newCompany: string;
    companyName: typeof ALL_ACCEPTED_LANGS;

    // templates
    templates: TemplateEntry[];
}

const initialState: TicketState = {
    company: '',
    newCompany: '',
    companyName: { en: '', 'zh-Hans': '', 'zh-Hant': '' },
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

        setTemplateLineById: (state, action: PayloadAction<{ id: string; line: string }>) => {
            const { id, line } = action.payload;
            const nextEntry = { ...(state.templates.find(entry => entry.id === id) ?? initTemplateEntry()), line };

            // populate line names
            const existingTemplate = templateList[state.company]?.find(entry => entry.filename === line);
            if (existingTemplate) {
                nextEntry.templateName.en = existingTemplate.name.en ?? '';
                nextEntry.templateName['zh-Hans'] = existingTemplate.name['zh-Hans'] ?? '';
                nextEntry.templateName['zh-Hant'] =
                    existingTemplate.name['zh-Hant'] ??
                    existingTemplate.name['zh-HK'] ??
                    existingTemplate.name['zh-TW'] ??
                    '';
            }

            state.templates = state.templates.map(entry => (entry.id === id ? nextEntry : entry));
        },

        setTemplateNewLineById: (state, action: PayloadAction<{ id: string; newLine: string }>) => {
            state.templates = state.templates.map(entry =>
                entry.id === action.payload.id ? { ...entry, newLine: action.payload.newLine } : entry
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

export const {
    setCompany,
    setNewCompany,
    setCompanyNameByLang,
    addTemplate,
    setTemplateLineById,
    setTemplateNewLineById,
    setTemplateParamById,
    removeTemplate,
    resetTicket,
} = ticketSlice.actions;
export default ticketSlice.reducer;
