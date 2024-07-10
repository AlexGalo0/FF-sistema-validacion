const sql = require('mssql');
const XLSX = require('xlsx');
const fs = require('fs');
const dbconfig= require('../db/dbconfig');

exports.uploadExcel = async (req, res) => {
  const filePath = req.file.path;

  try {
    // Read the file
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Connect to the database
    const pool = await sql.connect(dbconfig);

    // Insert data into the database
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

    // Remove the file after processing
    fs.unlinkSync(filePath);

    res.send('File uploaded and data inserted into database');
  } catch (err) {
    console.error(err);
    res.status(500).send('Database connection or file processing error');
  }
};
