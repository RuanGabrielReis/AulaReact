const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const banco = mysql2.createConnection({
    host : "localhost",
    port : 3308,
    user : "root",
    password : "mysqlfatec",
    database : "aulabd"
});

banco.connect( (erro) => {

    if (erro){
        console.log("Erro ao conectar ao MySQL: ");
        console.log(erro);
    } else {
        console.log("Conectado ao MySQL com sucesso !");
    }
});

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:" + port);
});

app.get("/alunos", (req, res) =>{
    const sql = "SELECT * from aluno";

    banco.query(sql,(erro,resultados) => {
        if (erro){
            console.log(erro);
            return res.status(200).json(resultados);
        } else {
            console.log(resultados);
            return res.status(200).json(resultados);
        }


    });
});

app.get("/alunos/:codigo", (req,res) => {
    const {codigo} = req.params;

    const sql = "SELECT * from aluno WHERE codigo = ?";

    banco.query(sql, [codigo], (erro, resultados) => {

        if (erro){
            console.log(erro);
            return res.status(500).json({error : "Erro ao consulta aluno"});
        }
        if (resultados.length === 0 ) {

            return res.status(400).json({message: "Aluno não encontrado"});
        }

        return res.status(200).json(resultados[0]);
    });
   
});

app.post("/alunos", (req, res) => {
    const{nome, cidade, estado} = req.body;
    const sql = "insert into alunos(nome, cidade, estado) values (?,?,?)"

    banco.query(sql, [nome, cidade, estado], (erro, result) =>{
        if (erro){
            console.log(erro);
            return res.status(500).json({error: "Erro ao cadastrar aluno"});
        } else {
            let mensagem = `Aluno ${nome} cadastrado com sucesso com o codigo ${res}`;
            console.log(mensagem);
            return res.status(201).json({message: mensagem});
        }
    })

});

app.put("/alunos/:id", (req, res) => {
    const {id} = req.params;
    const {nome, cidade, estado} = req.body;

    const sql = "UPDATE alunos SET nome = ?, cidade = ?, estado = ? WHERE codigo = ?";

    banco.query(sql, [nome, cidade, estado, id], (erro, result) => {
        if (erro){
            console.log(erro);
            return res.status(500).json({error: "Erro ao atualizar aluno"})
        }

        if (result.affectedRows === 0){
            return res.status(400).json({message: "Aluno não encontrado"})
        }

        return res.status(200).json({ message: `Aluno com ID ${id} atualizado com sucesso`});

    });

});

app.delete("/alunos/:id", (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM alunos WHERE codigo = ?"

    banco.query(sql, [id], (erro, result) => {
        if (erro) {
            console.log(erro);
            return res.status(500).json({error: "Erro ao excluir aluno"});
        }

        if (result.affectedRows === 0){
            return res.status(404).json({message: "Aluno não encontrado"});
        }

        return res.status(200).json({message: `Aluno com ID ${id} excluido com sucesso`});
    })

});

