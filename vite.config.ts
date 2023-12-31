import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({/*command, */mode}) => {

    // // dev specific config
    // if (command === 'serve') {
    //     return {};
    // }
    // // command === 'build'
    // else {
    //     return {};
    // }

    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), '');

    return {
        // vite config
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV)
        },
        base: './',
        build: {
            outDir: 'docs'
        },
        plugins: [
            react(),
            tsconfigPaths()
        ]
    };

});
