import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CompanyEntry, coreCompanyConfig, coreTemplateList, TemplateEntry } from '@railmapgen/rmg-templates-resources';

interface AppState {
    coreCompanyConfig: CompanyEntry[];
    otherCompanyConfig: CompanyEntry[];
    templateList: Record<string, TemplateEntry[]>;
    selectedCompany: string;
}

const initialState: AppState = {
    coreCompanyConfig: coreCompanyConfig,
    otherCompanyConfig: [],
    templateList: coreTemplateList,
    selectedCompany: '',
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setOtherCompanyConfig: (state, action: PayloadAction<CompanyEntry[]>) => {
            state.otherCompanyConfig = action.payload;
        },

        setTemplateListByCompany: (state, action: PayloadAction<{ company: string; templates: TemplateEntry[] }>) => {
            const { company, templates } = action.payload;
            state.templateList[company] = templates;
        },

        setSelectedCompany: (state, action: PayloadAction<string>) => {
            state.selectedCompany = action.payload;
        },
    },
});

export const { setOtherCompanyConfig, setTemplateListByCompany, setSelectedCompany } = appSlice.actions;
export default appSlice.reducer;
