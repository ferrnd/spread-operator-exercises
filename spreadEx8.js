const produto = {
    nome: "Notebook",
    preco: 3000
};

const novoPreco = { ...produto, preco: 3500 };

console.log(novoPreco);
