import { app, BrowserWindow } from "electron";
import isDev from "electron-is-dev";
import path from "path";
import "./db";

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: { nodeIntegration: true },
  });

  if (isDev) {
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, "../build/index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
