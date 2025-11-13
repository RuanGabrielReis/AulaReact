function consultar()
{
    fetch("http://localhost:3001/alunos")
    .then(res => res.json())
    .then(data => {
        console.log("Alunos:", data);
        document.getElementById("resultado").innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(err => {
        document.getElementById("resultado").innerHTML = "Erro ao obter dados do API !";
    })
}

function consultarPorCodigo(codigo)
{
    fetch(`http://localhost:3001/alunos/${codigo}`)
    .then(res => res.json())
    .then(data => {
        console.log("Alunos:", data);
        document.getElementById("resultado").innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(err => {
        document.getElementById("resultado").innerHTML = "Erro ao obter dados do API !";
    })
}

function cadastrar()
{
    const aluno = {
        nome : "Guilherme",
        cidade : "Mococa",
        estado : "SP"
    }

    fetch("http://localhost:3001/alunos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(aluno)
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerHTML = data.message || data.error;
    })
    .catch(err => {
        document.getElementById("resultado").innerHTML = "Erro ao obter dados da API !";
    });    
}

function  alterar(codigo) 
{
    const alunoAtualizado = {
        nome : "Guilherme Henrique de Souza",
        cidade : "São Paulo",
        estado : "SP"
    }

    fetch(`http://localhost:3001/alunos/${codigo}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(alunoAtualizado)
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerHTML = data.message || data.error;
    })
    .catch(err => {
        document.getElementById("resultado").innerHTML = "Erro ao obter dados da API !";
    }); 
}

function excluir(codigo)
{
    fetch(`http://localhost:3001/alunos/${codigo}`, {
        method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerHTML = data.message || data.error;
    })
    .catch(err => {
        document.getElementById("resultado").innerHTML = "Erro ao obter dados da API !";
    }); 
}