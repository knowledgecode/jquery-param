import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: 'jquery-param.js',
                format: 'umd',
                name: 'param',
                esModule: false
            },
            {
                file: 'jquery-param.min.js',
                format: 'umd',
                name: 'param',
                esModule: false,
                plugins: [terser()]
            }
        ]
    },
    {
        input: 'src/esm.js',
        output: [
            {
                file: 'esm/jquery-param.es.js',
                format: 'es'
            },
            {
                file: 'esm/jquery-param.es.min.js',
                format: 'es',
                plugins: [terser()]
            }
        ]
    }
];
