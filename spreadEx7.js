const aluno = {
    nome: "Lucas",
    idade: 17
};

const alunoAtualizado = { ...aluno, curso: "Desenvolvimento de Sistemas" };

console.log(alunoAtualizado);
