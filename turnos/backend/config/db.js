import { Sequelize } from "sequelize"

let db = new Sequelize({
  dialect: 'mssql',
  dialectModulePath: 'sequelize-msnodesqlv8',
  dialectOptions: {
    driver: 'SQL Server Native Client 10.0',
    instanceName: 'SQLEXPRESS',
    trustedConnection: true
  },
  host: process.env.BD_HOST,
  database: 'BDTURNOS'
})

console.log("Conectado a la base de datos", db.getDatabaseName())

export default db