const express = require("express");
const router = express.Router();
const controller = require("../controller/funcionariosController");

router.get("/", controller.getAllFuncionarios);
router.get("/livros", controller.getAllFuncionarios);
router.post("/", controller.postFuncionarios);
router.post("/livros", controller.postFuncionarios);
router.delete("/:id", controller.deleteFuncionario);
router.get("/:id", controller.GetById);

module.exports = router;
