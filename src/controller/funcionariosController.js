const funcionarios = require("../model/funcionarios.json");
const fs = require('fs');

const getAllFuncionarios = (req, res) => {
    console.log(req.url);
    res.status(200).send(funcionarios);
};

const postFuncionarios = (req, res) => {
    console.log(req.body);
    const { nome, idade, cpf, rg, data_nasc, sexo, signo, mae, pai, cep, endereco, numero, bairro, cidade, estado } = req.body;
    funcionarios.push({ nome, idade, cpf, rg, data_nasc, sexo, signo, mae, pai, cep, endereco, numero, bairro, cidade, estado });

    fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios), "utf8", function(err) {
        if(err){
            return res.status(424).send({ message: err });
        };
        console.log("O arquivo foi atualizado com sucesso!");
    });
    res.status(201).send(funcionarios);
};

const deleteFuncionario = (req, res) => {
    const id = req.params.id;
    const funcionarioFiltrado = funcionarios.find((funcionarios) => funcionarios.id == id);
    const index = funcionarios.indexOf(funcionarioFiltrado);
    funcionarios.splice(index, 1);
    fs.writeFile("./src/model/funcionarios.json", JSON.stringify(funcionarios), "utf8", function(err) {
        if (err) {
            return res.status(424).send({ message: err });
        };
        console.log("O arquivo foi atualizado com sucesso!");
    });
    res.status(200).send(funcionarios);
};

const GetById = (req, res) => {
    const id = req.params.id;
    const idade = req. params.idade;

    const idadeFiltrada = funcionarios.find((funcionarios) => funcionarios.id == idade);
    console.log(idade)

    res.status(200).send(idadeFiltrada);
};


module.exports = {
    getAllFuncionarios,
    postFuncionarios,
    deleteFuncionario,
    GetById
};