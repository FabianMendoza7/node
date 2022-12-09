import sql from "mssql"
import bd from "../config/bd.js"

const consultar = async (req, res) => {
    try {
        let results = await bd.request()        
            .execute('ConsultarServicios')

            res.json(results.recordsets[0])

    } catch(err) {
        res.json(err);
    }
}

export {
    consultar
}