import terser from '@rollup/plugin-terser';

export default [
    {
        input: 'src/index.js',
        output: [
            { file: 'dist/esm/jquery-param.js', format: 'es' },
            { file: 'dist/esm/jquery-param.mjs', format: 'es' },
            { file: 'dist/umd/jquery-param.js', format: 'umd', name: 'param' },
            { file: 'jquery-param.min.js', format: 'umd', name: 'param' }
        ],
        plugins: [terser()]
    }
];
