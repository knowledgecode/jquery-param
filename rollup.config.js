import compiler from '@ampproject/rollup-plugin-closure-compiler';

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
                file: 'esm/jquery-param.es.js',
                format: 'es'
            }
        ]
    },
    {
        input: 'src/index.js',
        output: [
            {
                file: 'jquery-param.min.js',
                format: 'umd',
                name: 'param',
                esModule: false
            },
            {
                file: 'esm/jquery-param.es.min.js',
                format: 'es'
            }
        ],
        plugins: [compiler()]
    }
];
