import { RootState } from './reducers'

export const selectMyValue = (state: RootState) => state.mySlice.value
