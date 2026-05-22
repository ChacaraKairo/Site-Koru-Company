const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');

const entries = [
  'assets',
  'produtos',
  'public',
  'contato.html',
  'google0b3389565647fbdf.html',
  'google252e1841f3afff3f.html',
  'index.html',
  'politica-de-privacidade.html',
  'produtos.html',
  'projetos.html',
  'servicos.html',
  'sobre.html',
];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const entry of entries) {
  const source = path.join(root, entry);
  const target = path.join(output, entry);

  if (!fs.existsSync(source)) {
    continue;
  }

  fs.cpSync(source, target, { recursive: true });
}

console.log(`Static site copied to ${path.relative(root, output)}`);
