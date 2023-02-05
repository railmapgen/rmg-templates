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
        appendCompanyAndTemplates: (
            state,
            action: PayloadAction<{ company: CompanyEntry; templates: TemplateEntry[] }>
        ) => {
            const { company, templates } = action.payload;
            state.companyConfig.push(company);
            state.templateList[company.id] = templates;
        },

        setSelectedCompany: (state, action: PayloadAction<string>) => {
            state.selectedCompany = action.payload;
        },
    },
});

export const { appendCompanyAndTemplates, setSelectedCompany } = appSlice.actions;
export default appSlice.reducer;
