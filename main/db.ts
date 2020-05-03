import { ipcMain } from "electron";
import { resolve } from "path";
import { Database } from "sqlite3";

const db = new Database(resolve(__dirname, "../db.sqlite3"));

ipcMain.handle("initDb", (event, args) => {
  db.serialize(() => {
    db.run("CREATE TABLE lorem (info TEXT)");
  });

  db.close();
});
