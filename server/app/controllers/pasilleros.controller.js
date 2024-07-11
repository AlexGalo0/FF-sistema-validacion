const sql = require("mssql");
const dbconfig = require("../db/dbconfig");

exports.todasFarmacias = async (req, res) => {
  try {
    const pool = await sql.connect(dbconfig);
    const request = pool.request();
    const result = await request.query("SELECT farmacia from PedidoDiario");
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener las farmacias");
  }
};
