# [Aula 08 - Operadores - Parte 02](https://www.cursoemvideo.com/curso/javascript/aulas/comandos-basicos-do-javascript/modulos/operadores-parte-2/)
# Operadores
## Relacionais
~~~javascript

5 >  2 //-> true
7 <  4 //-> false
8 >= 8 //-> true
9 <= 7 //-> false
5 == 5 //-> true
4 != 4 //-> false


// Outros Exenplos
preço >= 200.50         // o preço é maior ou igual a 200.50?
idade <18               // a idade é menor do que 18?
curso == 'JavaScript'   // o curos é JavaScript?
n1 != 12                // o primeiro número é diferente do segundo

// Identidade
5 == 5    //-> true
5 == '5'  //-> true
5 === '5' //-> false //=== é o operador de identidade ou operador de igualdade restrita
5 === 5   //-> true  // nesse caso são idênticos

// Desingual restrito
5 !=  5    //-> false
5 !=  '5'  //-> false
5 !== '5'  //-> true
~~~

---
## Lógicos
```
!  -> negação
&& -> conjunção ou E Lógico
|| -> disjunção ou OU Lógico
````

* negação
```
!true  -> false
!false -> true
```

* conjunção
```
true  && true  -> true
true  && false -> false
false && true  -> false
false && false -> false
```

* disjunção
```
true  || true  -> true
true  || false -> true
false || true  -> true
false || false -> false
```
~~~javascript
// Exemplos
idade >= 15 && idade <= 17         // a idade está entre 15 e 17?
estado == 'RJ' || estado == 'SP'   // o estado é RJ ou SP?
salário > 1500 && sexo != 'M'      // O salário é acima de 1500 e não é homem?
~~~

# Precedência
Orderm|Símbolos
--|--
 #|**aritméticos:**
 1º|   ()
 2º|   **
 3º|   * ,  / ,  %
 4º|   + ,  -
 #|**relacionais:**
 5º|   >  ,  <  ,  >=  ,  <=  ,   ==  ,  ===  ,  !=  ,   !==
 #|**lógicos:**
 6º|   !
 7º|   &&
 8º| &#124;&#124;
 

 ---
 # Ternário ? :
~~~javascript
teste ? true : false

média >= 7.0  ?  "Aprovado"  :  "Reprovado"
 ~~~
