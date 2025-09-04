const express = require ('express')
const server = express()
const porta = 3000
server.use(express.json())

let aluno = []

server.listen(porta, ()=>{
    console.log(`A sua porta é ${porta}`)
})

server.get("/zerar", (req, res)=>{
    aluno = []
    res.send("dados zerados"+aluno)
})

server.post("/cadastrar", (req, res)=>{
    const {nome, curso, idade, matricula, cidade} = req.body

    
    aluno.push({"nome":nome,
            "curso":curso,
            "cidade":cidade,
            "idade":idade,
            "matricula":matricula
        }
    )
    res.send("aluno add")
})

server.get("/listagem", (req,res)=>{
    let i =0
    let lista = ""
    while(i < aluno.length){
        lista+= `(${i}): ${aluno[i].nome}, curso:${aluno[i].curso}, idade:${aluno[i].idade}, cidade:${aluno[i].cidade}, matrícula:${aluno[i].matricula} } \n`
        i++ 
    }
    res.send(lista)
})

server.delete("/apagar", (req,res)=>{
    const {id} = req.query
    aluno.splice(id,1)
    res.send("aluno apagado")
})

server.put("/atualizar", (req,res)=>{
    const {nome, id, idade, cidade, curso} = req.body
    aluno[id].nome = nome
    aluno[id].idade = idade
    aluno[id].cidade = cidade
    aluno[id].curso = curso
    res.send("atualizada")
})
