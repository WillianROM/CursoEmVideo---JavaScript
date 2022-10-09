[Aula 07 - Operadores - Parte 1](https://www.cursoemvideo.com/curso/javascript/aulas/comandos-basicos-do-javascript/modulos/operadores-parte1/)

# Operadores
## Aritméticos:

5 + 2 => 7

5 - 2 => 3

5 * 2 => 10

5 / 2 => 2.5

5 % 2 => 1 (Resto da divisão inteira)

5 ** 2 => 25 (Potência - "ao quadrado")


**CUIDADO!**

5 + 3 / 2 => 6.5

## Precedência
Ordem|Símbolos
---|---
 1º|  ()
 2º|  **
 3º|  *   /   %
 4º|  +   -
 


---
## Atribuição
### Atribuição Simples
```
var a = 5 + 3             [8]
var b = a % 5             [3]
var c = 5 * b ** 2        [45]
var d = 10 - a / 2        [6]
var e = 6 * 2 / d         [2]
var f = b % e + 4 / e     [3]
```

### Auto-atribuições
```
var n = 3     # Simplificando    [3]
n = n + 4     |  n+=4            [7]  
n = n - 5     |  n-=5            [2]
n = n * 4     |  n*=4            [8]
n = n / 2     |  n/=2            [4]
n = n ** 2    |  n**=2           [16]
n = n % 5     |  n%=5            [1]
```

### Incremento
~~~javascript
var x = 5 
~~~

Imcremento1|Imcremento2|# Pós-Incremento |# Pré-Incremento
--|--|--|--
x = x + 1 | x+=1  | x++             | ++x
X = X - 1 | x-=1  | X--             | --x

