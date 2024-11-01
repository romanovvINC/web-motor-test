import {configureStore} from '@reduxjs/toolkit'
import {MainSliceSchema, rootReducer} from "./rootReducer.ts";

export interface StateSchema {
    root: MainSliceSchema,
}

export function createReduxStore() {
    return configureStore<StateSchema>({
        reducer: {
            root: rootReducer,
        }
    })
}