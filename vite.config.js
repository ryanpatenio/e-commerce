import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/assets/Css/theme.bundle.css',
                'resources/assets/ThemeBundle/theme.bundle.css',
                'resources/js/app.jsx',     // Frontend 
                'resources/js/admin.jsx',   // Admin
            ],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});
