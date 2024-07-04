import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface MyState {
	value: number
}

const initialState: MyState = {
	value: 0,
}

const mySlice = createSlice({
	name: 'mySlice',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		setValue: (state, action: PayloadAction<number>) => {
			state.value = action.payload
		},
	},
})

const { increment, decrement, setValue } = mySlice.actions
export default mySlice.reducer
export { increment, decrement, setValue }
