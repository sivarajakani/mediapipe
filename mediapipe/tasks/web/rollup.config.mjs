import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'VisionTasks', // Replace with your desired global variable name
  },
  plugins: [
    resolve(),
    commonjs(),
    terser()
  ]
}
