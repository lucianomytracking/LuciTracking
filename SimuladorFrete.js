const readline = require('readline');

// Criando interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para simular o frete
function simularFrete(valorTabela, valorNota, aliquota, percentualSeguro) {
  console.log("\n📦 Iniciando simulação de frete...\n");

  console.log(`📦 Valor da tabela de frete: R$ ${valorTabela.toFixed(2)}`);
  console.log(`🧾 Valor da nota fiscal: R$ ${valorNota.toFixed(2)}`);
  console.log(`💰 Alíquota: ${aliquota}%`);
  console.log(`🛡️ Percentual do seguro: ${percentualSeguro}%\n`);

  const valorImposto = valorTabela * (aliquota / 100);
  const valorSeguro = valorNota * (percentualSeguro / 100);
  const valorTotal = valorTabela + valorImposto + valorSeguro;

  console.log(`➡️ Valor do imposto: R$ ${valorImposto.toFixed(2)}`);
  console.log(`➡️ Valor do seguro: R$ ${valorSeguro.toFixed(2)}`);
  console.log(`\n📊 Valor total simulado do frete: R$ ${valorTotal.toFixed(2)}\n`);
}

// Perguntar ao usuário os dados
rl.question("Digite o valor da tabela de frete (R$): ", (valorTabela) => {
  rl.question("Digite o valor da nota fiscal (R$): ", (valorNota) => {
    rl.question("Digite a alíquota de imposto (%): ", (aliquota) => {
      rl.question("Digite o percentual de seguro sobre a nota (%): ", (percentualSeguro) => {

        // Converter os dados de string para número
        const tabela = parseFloat(valorTabela);
        const nota = parseFloat(valorNota);
        const aliq = parseFloat(aliquota);
        const seguro = parseFloat(percentualSeguro);

        // Chamar função de simulação
        simularFrete(tabela, nota, aliq, seguro);

        rl.close();
      });
    });
  });
});
