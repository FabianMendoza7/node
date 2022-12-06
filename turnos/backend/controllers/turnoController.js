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

const consultar = async (req, res) => {
    const { fechaInicio, fechaFin, idServicio } = req.body;

    try {
        let pool = await sql.connect(config);
        let results = await pool.request()
            .input('fechaInicio', sql.VarChar(10), fechaInicio)
            .input('fechaFin', sql.VarChar(10), fechaFin)
            .input('idServicio', sql.Int, idServicio)
            .execute('ConsultarTurnos')

            res.json(results.recordsets[0])

    } catch(err) {
        res.json(err);
    }
}

const crear = async (req, res) => {
    const { fechaInicio, fechaFin, idServicio } = req.body;

    try {
        let pool = await sql.connect(config);
        let results = await pool.request()
            .input('fechaInicio', sql.VarChar(10), fechaInicio)
            .input('fechaFin', sql.VarChar(10), fechaFin)
            .input('idServicio', sql.Int, idServicio)
            .execute('CrearTurnos')

            res.json(results.recordsets[0])

    } catch(err) {
        res.json(err);
    }
}

export {
    consultar,
    crear
}