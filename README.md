# Cartão de Crédito Válido

## 1. Introdução

O [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm), também
chamado de módulo 10, é um método de soma de verificação, usado para validar
números de identificação, como o IMEI de telefones celulares, cartões de crédito
etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que
contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem
ser multiplicados por dois; se esse número for maior ou igual a 10, devemos
adicionar os dígitos do resultado; o número a verificar será válido se a soma de
seus dígitos finais for um múltiplo de 10.

![gráfico do algoritmo de
Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumo do projeto

Esse projeto é um aplicativo da Web que permita ao usuário validar o número de um cartão de crédito. Além disso, você precisará implementar a funcionalidade para ocultar todos os dígitos de um cartão, exceto os quatro últimos. A lógica do projeto está implementada em JavaScript, incluindo conceitos como variáveis, condicionais e funções, bem como eventos e manipulação básica de DOM; fundamentos HTML e CSS.

### Os objetivos gerais deste projeto são os seguintes

### Quem são os principais usuários do produto?
Comerciantes e empresas que recebem pagamentos diariamente através de cartão de crédito.

### Quais são os objetivos desses usuários em relação a esse produto?
Este projeto foi desenvolvido com a intenção de oferecer mais praticidade, agilidade, economia e segurança para as empresas que recebem pagamentos via cartão de crédito. Evitando assim, fraudes e prejuízos.

### Como eu acho que esse produto pode resolver problemas do usuário?
Comerciantes poderão identificar possíveis fraudes de cartão de crédito com maior rapidez e praticidade. E assim evitar possíveis danos e prejuízos. Trazendo mais segurança e automaticamente economia para o seu fluxo de caixa.

