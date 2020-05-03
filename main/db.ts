import { resolve } from "path";
import { Database } from "sqlite3";

const db = new Database(resolve(__dirname, "../db.sqlite3"));

db.serialize(() => {
  db.run("CREATE TABLE lorem (info TEXT)");
});

db.close();
