import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {StateSchema} from "./store.ts";

export enum TabType {
    form = 'FORM',
    article = 'ARTICLE',
}

export interface MainSliceSchema {
    type: TabType;
}

const initialState: MainSliceSchema = {
    type: TabType.article,
}

export const rootSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setType: (state, action: PayloadAction<TabType>) => {
            state.type = action.payload;
        },
    }
})

export const getContentType = (state: StateSchema) => state.root.type || TabType.article;

export const { setType } = rootSlice.actions
export const { reducer: rootReducer} = rootSlice