import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from './store'
import {
	increment,
	decrement,
	selectMyValue,
	Button,
	ColoredButton,
	GreenColoredButton,
} from 'my-react-library'

const App: React.FC = () => {
	const value = useSelector((state: RootState) => state.mySlice.value)
	const dispatch = useDispatch<AppDispatch>()

	return (
		<div>
			<h1>Value: {value}</h1>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
			<Button name='Hello' />
			<ColoredButton name='I am coloured' />
			<GreenColoredButton name='I am green coloured' />
		</div>
	)
}

export default App
