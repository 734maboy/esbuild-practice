import ESBuild, {BuildOptions} from 'esbuild';
import path from "path";

const mode = process.env.MODE || 'development';
const isDev = mode === 'development';
const isProd = mode === 'production';

function resolveRoot(...segments: string[]) {
  return path.resolve(__dirname, '..', '..', ...segments);
}

const config:BuildOptions = {
  outdir: resolveRoot('build'),
  entryPoints: [resolveRoot('src','index.jsx')],
  entryNames: '[dir]/bundle.[name]-[hash]',
  allowOverwrite: true,
  bundle: true,
  tsconfig: resolveRoot('tsconfig.json'),
  minify: isProd,
  sourcemap: isDev,
  loader: {
    '.png': 'file',
    '.svg': 'file',
    '.jpg': 'file',
  },
}

export default config;
