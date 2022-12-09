import sql from "mssql"
import dotenv from "dotenv"

dotenv.config()
const config = {
    user: process.env.BD_USERNAME,
    password: process.env.BD_PASSWORD,
    server: process.env.BD_HOST,
    database: process.env.BD_NAME,
    port: process.env.BD_PORT,
    options: {
        instanceName: process.env.BD_INSTANCE,
        trustServerCertificate: true,
        enableArithAbort: true            
    }        
}

let bd = await sql.connect(config)

export default bd