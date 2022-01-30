const { BrowserWindow, app } = require('electron');
async function main() {
    await app.whenReady();
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 400,
        webPreferences: {
            nodeIntegration: false,
            // preload: __dirname + '/preload.js'
        },
    });
    win.loadFile(__dirname + '/client/index.html');
}
main();