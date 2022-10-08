https://www.cursoemvideo.com/curso/javascript/aulas/comandos-basicos-do-javascript/modulos/tratamento-de-dados/

#Tratamento de dados
#Conversão de String para Número

Para números inteiros:
Number.parseInt(n) 

Para números flutuantes:
Number.parseFloat(n)

O JavaScript define o tipo do número:
Number(n)

---
#Conversão de Número para String 

String(n)
n.toString()


---
#Formatando Strings

var s = 'JavaScript'
'Eu estou aprendendo s'         // não faz interpolação
'Eu estou aprendendo' + s       // usa concatenação
`Eu estou aprendendo ${s}`      // usa template string

---
s.length                        // quantos caracteres a string tem
s.toUpperCase ()                // tudo para 'MAIÚSCULAS'
s.toLowerCase()                 // tudo para 'minúsculas'

---
#Formatando Números
var n1 = 1543.5
n1.toFixed(2)                   // Para mostrar o número flutuante com quantidade de casas decimais
n1.toFixed(2).replace('.',',')  // Para substituir o ponto por vírgula para ficar no formato de moeda usado no Brasil
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    // Para formatar e ficar o valor no formato Real do Brasil
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})    // Para ficar em formato de Dólar Americano
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})    // Para ficar em formato de Euro


---
ctrl + L -> limpa o terminal do node