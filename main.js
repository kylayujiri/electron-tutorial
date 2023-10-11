// importing two electron modules
const { app, BrowserWindow, ipcMain } = require('electron');

const path = require('node:path');

const createWindow = () => {

  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');

};

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow();

  // on mac, activating an app with no open windows opens a new one
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  });
});

// on windows and linux, closing all windows means quitting the app
app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit()
  }
});
