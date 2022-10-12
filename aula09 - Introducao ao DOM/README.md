# [Aula 09 - Introdução ao DOM](https://www.cursoemvideo.com/curso/javascript/aulas/entendendo-o-dom/modulos/introducao-ao-dom/)

# **DOM - Documento Object Model**
- Conjunto de objetos dentro do navegador que dá acesso aos componentes internos do website.

## Árvore DOM
```
              ________
             | window |
               /  |  \
              /   |   \
             /    |    \
            /     |     \
           /      |      \
 |location|  |document|  |history|
                  |
                  |
                  |
                |html|
                  /\
                 /  \
                /    \
               /      \
        |head|       |body|
        /  |          / /|\
       /   |         / / | \
  |meta| |title|    / /  |  \
                   / /   |   \
               |h1| |p| |p|  |div|
                         |
                         |
                      |strong|

```

## Selecionando:
* por Marca (tag) &nbsp; -> getElementsByTagName()
* por ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -> getElementById()
* por Nome &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  -> getElementsByName()
* por Classe &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -> getElementsByClassName()
* por Seletor
    * -> querySelector()
    * -> querySelectorAll()
