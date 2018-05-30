import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import json from 'rollup-plugin-json';
export default {

  input: './src/script.es6.js',
  output: {
    file : './dist/rollup.bundle.js',
    format : 'es',
    name:'moduleName'
  },
  plugins:[
    json(),
    nodeResolve({
      jsnext : true,
      module: true
    }),
    commonjs(),
  ],
  experimentalDynamicImport: true,
  experimentalCodeSplitting: true
};