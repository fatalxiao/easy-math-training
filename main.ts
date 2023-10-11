import {app, BrowserWindow} from 'electron';

function createWindow() {

    const win = new BrowserWindow({
        show: false,
        fullscreen: true,
        // frame: false,
        titleBarStyle: 'hidden',
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.once('ready-to-show', () => win.show());

    win.loadFile('./docs/index.html');

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    // eslint-disable-next-line no-undef
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
