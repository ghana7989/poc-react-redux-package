import { configureStore } from '@reduxjs/toolkit'
import { reducers as libraryReducers } from 'my-react-library'

const store = configureStore({
	reducer: {
		...libraryReducers,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
