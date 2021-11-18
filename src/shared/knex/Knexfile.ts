import path from 'path';

export default {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, '../', '../', 'Database', String(process.env.DB_DATABASE))
  },
  migrations: {
    directory: path.resolve(__dirname, '../', '../', 'Database')
  }

}
