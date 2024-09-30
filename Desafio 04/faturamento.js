//programa simples de média

const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcula o faturamento total
let totalFaturamento = 0;
for (const valor of Object.values(faturamentoPorEstado)) {
    totalFaturamento += valor;
}



for (const estado in faturamentoPorEstado) {

    const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100; 

    console.log(`${estado}: ${percentual.toFixed(2)}%`); 
}

