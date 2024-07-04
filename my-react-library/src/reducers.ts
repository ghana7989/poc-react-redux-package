import myReducer, { MyState } from './slices/mySlice'

export interface RootState {
	mySlice: MyState
}

export const reducers = {
	mySlice: myReducer,
}
