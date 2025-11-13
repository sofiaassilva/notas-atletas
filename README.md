# Cálculo de Média de Notas para Ginástica Artística

## Resumo do Projeto

Esta aplicação em JavaScript foi desenvolvida para processar e calcular a média final das notas de atletas em uma competição de ginástica artística. A regra principal de avaliação é que a nota mais alta e a nota mais baixa atribuídas por um painel de cinco jurados devem ser descartadas, e a média é calculada apenas com base nas três notas restantes.

## Introdução e Regras de Avaliação

Em uma competição de ginástica artística, a avaliação é realizada por uma banca composta por cinco jurados. Cada jurado avalia um critério específico:

- Tempo de Duração da Apresentação  
- Originalidade da Coreografia  
- Postura do Atleta  
- Dificuldade das Acrobacias  
- Sincronismo  


**Regras de Pontuação:**

- Cada jurado pode fornecer uma nota de 1 à 10.  
- A média final do atleta é calculada com base nas três notas do meio, desconsiderando a maior e a menor nota fornecidas pelos jurados.


## Especificações Técnicas

A solução foi implementada utilizando JavaScript e deve seguir as seguintes diretrizes:

- A entrada é uma matriz de objetos, onde cada objeto contém o nome do atleta e a matriz de notas atribuídas pelos cinco jurados.  
- Deve ser criada uma função que realize o processamento de toda a matriz.  
- Para cada atleta, a função deve calcular a média das notas sem considerar a maior e a menor nota.  
- A saída deve ser exibida no console, mostrando o nome do atleta, todas as notas originais e a média válida calculada.


## Solução em JavaScript

O código completo da função `calcularMediaAtletas` foi desenvolvido para atender a todos os requisitos do projeto. Ele realiza o processamento das notas dos atletas, descartando a maior e a menor pontuação, e calcula a média final com base nas três notas intermediárias.


## Como Rodar o Projeto

Para executar a aplicação, basta copiar e colar o código JavaScript em um ambiente de execução (como o console do navegador, um arquivo `.js` rodado via Node.js, ou o ambiente de pré-visualização) e os resultados serão exibidos no console.


## Licença

Este projeto está licenciado sob os termos da MIT License.


## Agradecimentos

Obrigado por conferir este projeto! Fique à vontade para contribuir, sugerir melhorias ou utilizar como base para seus próprios estudos.