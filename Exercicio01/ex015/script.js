function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        let genero = ''

        let img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <= 12){
                //Criança
                img.setAttribute('src', 'fotoHomemCrianca.png')
            } else if (idade > 12 && idade < 22){
                //Jovem
                img.setAttribute('src','fotoHomemJovem.png')
            } else if (idade >=22 && idade < 65){
                //Adulto
                img.setAttribute('src','fotoHomemAdulto.png')
            } else if(idade > 65){
                //Idoso
                img.setAttribute('src','fotoHomemIdoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <= 10){
                //Criança
                img.setAttribute('src','fotoMulherCrianca.png')
            } else if (idade > 10 && idade < 22){
                //Jovem
                img.setAttribute('src','fotoMulherJovem.png')
            } else if (idade >=22 && idade < 65){
                //Adulto
                img.setAttribute('src', 'fotoMulherAdulto.png')
            } else if(idade > 65){
                //Idoso
                img.setAttribute('src','fotoMulherIdoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}