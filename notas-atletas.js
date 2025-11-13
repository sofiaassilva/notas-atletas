let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

// Calcula a media das notas de cada atleta, desconsiderando a maior e a menor nota.


function calcularMediaAtletas(objAtletas) {
    // Itera sobre todos os atletas na matriz
    for (let i = 0; i < objAtletas.length; i++) {
        let atleta = objAtletas[i];
        
        // 1. Cria uma copia da matriz de notas para ordenacao, mantendo a original intacta.
        let notasComputadas = [...atleta.notas];
        
        // 2. Ordena as notas em ordem crescente (a - b).
        notasComputadas.sort((a, b) => a - b); 
        
        // 3. Seleciona as tres notas do meio (1, 2 e 3) com slice(1, 4), 
        // elimina a menor (0) e a maior (4).
        let notasMedianas = notasComputadas.slice(1, 4);

        // 4. Calcula a soma das notas medianas.
        let soma = 0;
        notasMedianas.forEach(nota => {
            soma += nota;
        });

        // 5. Calcula a media, dividindo a soma pelo numero de notas validas (3).
        let media = soma / notasMedianas.length;
        
        // Formata as notas originais para exibicao, separadas por virgula.
        let notasOriginaisFormatadas = atleta.notas.join(',');

        // Formata a media para exibicao, utilizando virgula como separador decimal
        // para corresponder ao padrao esperado.
        let mediaFormatada = String(media).replace('.', ',');

        // 6. Apresenta o resultado no console.
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${notasOriginaisFormatadas}`);
        console.log(`Media Valida: ${mediaFormatada}\n`);

    }
}

// Execucao da funcao para processar os dados de entrada
calcularMediaAtletas(atletas);  