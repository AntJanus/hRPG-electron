'use strict';

const { app, BrowserWindow } = require('electron');

const hRPGReduxLocation = '/hRPG-lite-redux/build/index.html';

var mainWindow = null;

app.on('window-all-closed', () => {

  if(process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({
    width: 925,
    height: 800,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    icon: __dirname + '/assets/images/hrpg-logo.png'
  });

  mainWindow.loadURL('file://' + __dirname + hRPGReduxLocation);


  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
