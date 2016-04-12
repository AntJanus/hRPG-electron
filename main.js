'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const hRPGReduxLocation = '/hRPG-lite-redux/build/index.html';

var mainWindow = null;

app.on('window-all-closed', () => {

  if(process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({ width: 925, height: 800 });

  mainWindow.loadURL('file://' + __dirname + hRPGReduxLocation);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
