import { ipcMain } from "electron";
import { resolve } from "path";
import { Database } from "sqlite3";

const fileName = resolve(__dirname, "../db.sqlite3");

ipcMain.handle("initDb", () => {
  const db = new Database(fileName);

  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
  });

  db.close();
});
