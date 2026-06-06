import terser from '@rollup/plugin-terser';

export default [
    {
        input: 'src/index.js',
        output: [
            { file: 'dist/esm/jquery-param.js', format: 'es' },
            { file: 'dist/cjs/jquery-param.cjs', format: 'cjs' },
            { file: 'jquery-param.min.js', format: 'umd', name: 'param' }
        ],
        plugins: [terser()]
    }
];
