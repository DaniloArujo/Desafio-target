//Não encontrei o arquivo JSON para reaçlizar a tarefa, então fiz um json e salvei em uma constante para substituir

const faturamentoData = {
    "faturamento_diario": [
      {"dia": 1, "faturamento": 2400.75, "tipo": "dia normal"},
      {"dia": 2, "faturamento": 1350.30, "tipo": "dia normal"},
      {"dia": 3, "faturamento": 2100.00, "tipo": "dia normal"},
      {"dia": 4, "faturamento": 0.00, "tipo": "feriado"},
      {"dia": 5, "faturamento": 0.00, "tipo": "fim de semana"},
      {"dia": 6, "faturamento": 3000.50, "tipo": "dia normal"},
      {"dia": 7, "faturamento": 4000.75, "tipo": "dia normal"},
      {"dia": 8, "faturamento": 1850.90, "tipo": "dia normal"},
      {"dia": 9, "faturamento": 2200.35, "tipo": "dia normal"},
      {"dia": 10, "faturamento": 0.00, "tipo": "fim de semana"},
      {"dia": 11, "faturamento": 0.00, "tipo": "fim de semana"},
      {"dia": 12, "faturamento": 4500.00, "tipo": "dia normal"},
      {"dia": 13, "faturamento": 5000.65, "tipo": "dia normal"},
      {"dia": 14, "faturamento": 2750.20, "tipo": "dia normal"},
      {"dia": 15, "faturamento": 3500.10, "tipo": "dia normal"}
    ]
  };
  
  function calcularFaturamento() {

    
      const faturamentos = faturamentoData.faturamento_diario;
  
      
      let menorFaturamento = null;
      let maiorFaturamento = null;
      let somaFaturamento = 0;
      let diasComFaturamento = 0;
  
      //loop para identificar o menor e maior faturamento    
      for (const dia of faturamentos) {
          if (dia.faturamento > 0) {

              if (menorFaturamento === null || dia.faturamento < menorFaturamento) {
                  menorFaturamento = dia.faturamento;
              }
  

              if (maiorFaturamento === null || dia.faturamento > maiorFaturamento) {
                  maiorFaturamento = dia.faturamento;
              }
  
              
              somaFaturamento += dia.faturamento;
              diasComFaturamento++;
          }
      }
  
      
      const mediaFaturamento = somaFaturamento / diasComFaturamento;
  
      // Conta dias acima da média
      let diasAcimaDaMedia = 0;
      for (const dia of faturamentos) {
          if (dia.faturamento > mediaFaturamento) {
              diasAcimaDaMedia++;
          }
      }
  
      
      console.log(`Menor valor de faturamento: R$ ${menorFaturamento}`);
      console.log(`Maior valor de faturamento: R$ ${maiorFaturamento}`);
      console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
  }
  
 
  calcularFaturamento();
  