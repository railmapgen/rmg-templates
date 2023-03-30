import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CompanyEntry, coreCompanyConfig, coreTemplateList, TemplateEntry } from '@railmapgen/rmg-templates-resources';

interface AppState {
    companyConfig: CompanyEntry[];
    templateList: Record<string, TemplateEntry[]>;
    selectedCompany: string;
}

const initialState: AppState = {
    companyConfig: coreCompanyConfig,
    templateList: coreTemplateList,
    selectedCompany: '',
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        appendCompanies: (state, action: PayloadAction<CompanyEntry[]>) => {
            state.companyConfig = state.companyConfig.concat(action.payload);
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

export const { appendCompanies, setTemplateListByCompany, setSelectedCompany } = appSlice.actions;
export default appSlice.reducer;
