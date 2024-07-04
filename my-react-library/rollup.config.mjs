import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import pkg from './package.json' assert { type: 'json' }
import postcss from 'rollup-plugin-postcss'

export default {
	input: 'src/main.tsx',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: pkg.module,
			format: 'es',
			sourcemap: true,
		},
	],
	external: [...Object.keys(pkg.peerDependencies || {})],
	plugins: [
		resolve(),
		commonjs(),
		json(),
		postcss({
			extensions: ['.css'],
		}),
		typescript({ tsconfig: './tsconfig.json' }),
	],
	watch: {
		include: 'src/**',
	},
}
