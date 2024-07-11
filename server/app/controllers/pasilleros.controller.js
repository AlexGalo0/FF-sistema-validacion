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

exports.pedidoDeFarmacia = async (req, res) => {
  try {
    const farmacia = req.params.farmacia;
    const pool = await sql.connect(dbconfig);
    const request = pool.request();
    request.input("farmacia", sql.VarChar, farmacia);
    const result = await request.query(
      "SELECT * from PedidoDiario where farmacia = @farmacia"
    );
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener el pedido de la farmacia");
  }
}

exports.pasillosPorFarmacia = async (req, res) => {
  try {
    const farmacia = req.params.farmacia;
    const pool = await sql.connect(dbconfig);
    const request = pool.request();
    request.input("farmacia", sql.VarChar, farmacia);
    const result = await request.query(
      "SELECT pasillo from PedidoDiario where farmacia = @farmacia"
    );
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener los pasillos de la farmacia");
  }
}
