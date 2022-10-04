import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    selectedCompany: string;
}

const initialState: AppState = {
    selectedCompany: '',
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSelectedCompany: (state, action: PayloadAction<string>) => {
            state.selectedCompany = action.payload;
        },
    },
});

export const { setSelectedCompany } = appSlice.actions;
export default appSlice.reducer;
