const estoque = [
  { nome: "Produto A", preco: 10, quantidade: 50 },
  { nome: "Produto B", preco: 25, quantidade: 30 },
  { nome: "Produto C", preco: 5, quantidade: 100 },
];

const vendasDaSemana = [
  [5, 3, 2, 4, 6, 1, 0], 
  [1, 2, 0, 3, 1, 2, 1], 
  [10, 8, 5, 7, 9, 6, 4], 
];
 
function calcularTotalVendido(indiceProduto) {
  const linhaDeVendas = vendasDaSemana[indiceProduto];
  let unidadesVendidas = 0;
 
  for (let dia = 0; dia < linhaDeVendas.length; dia++) {
    unidadesVendidas += linhaDeVendas[dia];
  }
 
  return unidadesVendidas * estoque[indiceProduto].preco;
}
 

 
let produtoMaisVendido = null;
let maiorValorVendido = 0;
 
for (let i = 0; i < estoque.length; i++) {
  const totalVendido = calcularTotalVendido(i);
  console.log(`${estoque[i].nome}: R$ ${totalVendido.toFixed(2)} vendidos na semana`);
 
  if (totalVendido > maiorValorVendido) {
    maiorValorVendido = totalVendido;
    produtoMaisVendido = estoque[i].nome;
  }
}
 
console.log(`\nProduto com maior valor total vendido na semana: ${produtoMaisVendido} (R$ ${maiorValorVendido.toFixed(2)})`);