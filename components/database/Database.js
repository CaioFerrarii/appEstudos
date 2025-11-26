import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('estudos.db');

export function initDB() {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS estudos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        materia TEXT NOT NULL,
        conteudo TEXT NOT NULL,
        dataEstudo TEXT NOT NULL,
        tempo INTEGER NOT NULL,
        nivel TEXT NOT NULL
      );`
    );
  });
}

export function getDB() {
  return db;
}
