export default {
    input: 'dist/index.js',
    output: [
        {
            file: 'index.js',
            name: 'index',
            format: 'umd',
            sourcemap: false,
            freeze: false,
        }
    ]
};
