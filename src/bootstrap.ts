import { app, BrowserWindow } from 'electron';

async function main() {
  await app.whenReady();
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  await win.loadFile('index.html');
}

main();
