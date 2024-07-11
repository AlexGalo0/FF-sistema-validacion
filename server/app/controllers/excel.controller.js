const sql = require('mssql');
const XLSX = require('xlsx');
const fs = require('fs');
const dbconfig= require('../db/dbconfig');

exports.uploadExcel = async (req, res) => {
  const filePath = req.file.path;

  try {
   //lectura del archivo excel
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    const pool = await sql.connect(dbconfig);
    const request = pool.request();
    for (const row of worksheet) {
      const query = `
        INSERT INTO PedidoDiario (fecha, codigo_sap, farmacia, codigo_articulo, descripcion, pasillo, laboratorio, ubicacion)
        VALUES (
          '${row.fecha}', 
          '${row.codigo_sap}', 
          '${row.farmacia}', 
          '${row.codigo_articulo}', 
          '${row.descripcion}', 
          '${row.pasillo}', 
          '${row.laboratorio}', 
          '${row.ubicacion}'
        );
      `;
      await request.query(query);
    }
    fs.unlinkSync(filePath);
    res.send('Insersion exitosa');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al insertar datos en la base de datos');
  }
};
