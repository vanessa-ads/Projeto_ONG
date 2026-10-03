import { minify } from 'html-minifier-terser';
import { defineConfig } from 'vite';

function minificarHtml() {
    return {
        name: 'minificar-html',
        apply: 'build',
        async transformIndexHtml(html) {
            return await minify(html, {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                minifyCSS: true,
                minifyJS: true
            });
        }
    };
}

export default defineConfig({
    plugins: [minificarHtml()],
    base: '/Projeto_ONG/',
    root: 'html',
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
                projetos: 'projetos.html',
                cadastro: 'cadastro.html'
            },
            output: {
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash][extname]'
            }
        },
        outDir: '../dist',
        emptyOutDir: true
    }
});
