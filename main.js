class Alunos {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
    }
}

const joao = new Alunos ("joao",7)
const maria = new Alunos ("maria", 8)
const eloise = new Alunos ("eloise", 9)
const julio = new Alunos ("julio", 6)
const armando = new Alunos ("armando", 4)
const cesar = new Alunos ("cesar", 0)

const todosOsAlunos = []
todosOsAlunos.push(joao, maria, eloise, julio, armando, cesar)

const alunosAprovados = todosOsAlunos.filter(function(item){
    return item.nota >= 6
})

console.log(alunosAprovados)