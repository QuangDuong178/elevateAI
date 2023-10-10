import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass';
import {fileURLToPath, URL} from 'url';

export default defineConfig(({mode}) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    return {
        plugins: [
            react(),
        ],
        css: {
            postcss: './postcss.config.js',
            preprocessorOptions: {
                scss: {
                    implementation: sass,
                },
            },
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            port: 9000, // replace with your desired port number
        },
    };
});