// importing two electron modules
const { app, BrowserWindow } = require('electron');

const createWindow = () => {

  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile('index.html');

};

// on windows and linux, closing all windows means quitting the app
app.on('window-all-closed', () => {
  if (process.platform != 'darwin') app.quit();
});

app.whenReady().then(() => {
  createWindow();

  // on mac, activating an app with no open windows opens a new one
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
