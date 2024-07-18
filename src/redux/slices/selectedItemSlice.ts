// store/metaCitySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MetaCityItem, MetaCityState } from '../type';
import { RootState } from '../reducers';

const initialState: MetaCityState = {
    selectedItem: null,
};

const metaCitySlice = createSlice({
    name: 'metaCity',
    initialState,
    reducers: {
        setSelectedItem(state, action: PayloadAction<MetaCityItem>) {
            state.selectedItem = action.payload;
        },
    },
});

export const { setSelectedItem } = metaCitySlice.actions;
export const selectedItemData = (state: RootState) => state.selectedItem;
export default metaCitySlice.reducer;
