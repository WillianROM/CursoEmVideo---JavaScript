[Aula 06 - Tratamento de Dados](https://www.cursoemvideo.com/curso/javascript/aulas/comandos-basicos-do-javascript/modulos/tratamento-de-dados/)

# Tratamento de dados
## Conversão de String para Número

**Para números inteiros:**
~~~javascript
Number.parseInt(n)
~~~

**Para números flutuantes:**
~~~javascript
Number.parseFloat(n)
~~~

**O JavaScript define o tipo do número:**
~~~javascript
Number(n)
~~~
---
## Conversão de Número para String 

~~~javascript
String(n)

n.toString()
~~~

---
**Formatando Strings**

~~~javascript
`var s = 'JavaScript'`

`'Eu estou aprendendo s'`         // não faz interpolação

`'Eu estou aprendendo' + s`       // usa concatenação

`Eu estou aprendendo ${s}`        // usa template string 
~~~

---
~~~javascript
s.length                        // quantos caracteres a string tem
s.toUpperCase ()                // tudo para 'MAIÚSCULAS'
s.toLowerCase()                 // tudo para 'minúsculas'
~~~
---
## Formatando Números
~~~javascript
var n1 = 1543.5
n1.toFixed(2)                                                       // Para mostrar o número flutuante com quantidade de casas decimais
n1.toFixed(2).replace('.',',')                                      // Para substituir o ponto por vírgula para ficar no formato de moeda usado no Brasil

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})    // Para formatar e ficar o valor no formato Real do Brasil
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})    // Para ficar em formato de Dólar Americano
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})    // Para ficar em formato de Euro
~~~
