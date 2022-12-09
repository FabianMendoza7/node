import sql from "mssql"
import bd from "../config/bd.js"

const consultar = async (req, res) => {
    const { fechaInicio, fechaFin, idServicio } = req.body;

    try {
        let results = await bd.request()
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
        let results = await bd.request()
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