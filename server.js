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
    const {nome_aluno, curso} = req.body.nome
    aluno.push({"nome":nome_aluno,
            "curso":curso,
        }
    )
    res.send("aluno add")
})

server.get("/listagem", (req,res)=>{
    let i =0
    let lista = ""
    while(i < aluno.length){
        lista+= `(${i}): ${aluno[i].nome}, curso${aluno[i].curso} \n`
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
    const {nome_aluno, id} = req.body
    aluno[id] = nome_aluno
    res.send("atualizada")
})