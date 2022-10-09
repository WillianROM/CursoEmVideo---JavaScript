https://www.cursoemvideo.com/curso/javascript/aulas/entendendo-o-dom/modulos/introducao-ao-dom/

DOM - Documento Object Model
- Conjunto de objetos dentro do navegador que dá acesso aos componentes internos do website.

//Árvore DOM
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

//selecionando
* por Marca (tag) -> getElementsByTagName()
* por ID          -> getElementById()
* por Nome        -> getElementsByName()
* por Classe      -> getElementsByClassName()
* por Seletor
    * -> querySelector()
    * -> querySelectorAll()
