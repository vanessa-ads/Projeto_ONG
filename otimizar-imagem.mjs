import fs from 'node:fs/promises';
import sharp from 'sharp';

await fs.mkdir('imagens/otimizada', { recursive: true });

await sharp('imagens/fotodocervo-unsplash.jpg')
    .resize({ width: 1200, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile('imagens/otimizada/fotodocervo-unsplash.jpg');

console.log('Imagem otimizada com sucesso.');