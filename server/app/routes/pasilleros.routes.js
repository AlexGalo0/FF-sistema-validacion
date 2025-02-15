const express = require("express");
const router = express.Router();
const pasillerosController = require("../controllers/pasilleros.controller");

router.get("/todasFarmacias", async (req, res) => {
  try {
    await pasillerosController.todasFarmacias(req, res);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


router.get("/pedidoFarmacia/:farmacia", async (req, res) => {
  try {
    await pasillerosController.pedidoDeFarmacia(req, res);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/pasillosPorFarmacia/:farmacia", async (req, res) => {
  try {
    await pasillerosController.pasillosPorFarmacia(req, res);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;

