import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
    server: {
        host: "legal_center.cc",
        hmr: {
            host: "legal_center.cc"
        },
        https: {
            key: "C:/xampp/apache/cert/legal_center.cc/key.pem",
            cert: "C:/xampp/apache/cert/legal_center.cc/cert.pem"
        }
    },
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    }
});
