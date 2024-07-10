const express = require('express');
const router = express.Router();
const multer = require('multer');
const excelController = require('../controllers/excel.controller'); // Adjust the path as necessary

const upload = multer({ dest: 'uploads/' }); // Configure Multer to save files to 'uploads/' directory

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    await excelController.uploadExcel(req, res);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
