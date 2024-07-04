import React from 'react'

function App() {
	return <h1>Hello</h1>
}
export interface ButtonProps {
	name: string
}
export function Button({ name }: ButtonProps) {
	return <button>{name}!!!</button>
}
export function ColoredButton({ name }: ButtonProps) {
	return <button style={{ color: 'red' }}>{name}!!!</button>
}
export function GreenColoredButton({ name }: ButtonProps) {
	return <button style={{ color: 'green' }}>{name}!!!</button>
}
export default App
