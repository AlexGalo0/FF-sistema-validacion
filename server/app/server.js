const express = require('express');
const cors = require('cors');
const app = express();
const excelRoutes = require('./routes/excel.routes'); // Adjust the path as necessary

app.use(cors());
app.use(express.json());
app.use('/api', excelRoutes); // Adjust the base route as necessary

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
