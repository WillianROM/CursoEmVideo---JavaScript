function carregar(){
    let msg = window.document.querySelector('div#msg')
    let img = window.document.querySelector('img#imagem')

    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=6 && hora < 12){
        //Bom dia
        img.src = 'fotomanha.png'
        window.document.body.style.background = 'rgb(250,190,50)'
    } else if(hora >=12 && hora < 18){
        //Boa tarde
        img.src = 'fototarde.png'
        window.document.body.style.background = 'rgb(209,138,87)'
    } else{
        //Boa noite
        img.src = 'fotonoite.png'
        window.document.body.style.background = 'rgb(42,58,75)'
    }
}
