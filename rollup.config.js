import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { optimizeLodashImports } from '@optimize-lodash/rollup-plugin';

export default {
    input: 'dist/index.js',
    external: ['lodash'],
    onwarn: function(warning) {
        if (warning.code === 'THIS_IS_UNDEFINED') { return; }
        console.warn(warning.message);
    },
    output: {
        file: 'VisualizationManager.js',
        name: 'VisualizationManager',
        format: 'umd',
        sourcemap: false,
        freeze: false,
    },
    plugins: [
        commonjs({
            include: 'node_modules/**'
        }),
        nodeResolve(),
        optimizeLodashImports(),
    ],
};
