require('esbuild').build({
  entryPoints: ['src/main.ts'],
  outdir: 'dist',
  bundle: true,
  watch: true,
});

require('esbuild').build({
  entryPoints: ['src/bootstrap.ts'],
  outdir: 'dist',
  watch: true,
  platform: 'node',
});

require('live-server').start({
  root: 'dist',
  open: true,
});
