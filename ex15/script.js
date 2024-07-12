function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')    
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                img.setAttribute('src', 'bbm.jpg')
            }else if(idade <17) {
                img.setAttribute('src', 'criancam.jpg')
            }else if(idade <50) {
                img.setAttribute('src', 'adultom.jpg')
            }else{
                img.setAttribute('src', 'idosom.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if( idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bbf.jpg')
            }else if(idade <17) {
                img.setAttribute('src', 'criancaf.jpg')
            }else if(idade <50) {
                img.setAttribute('src', 'adultof.jpg')
            }else {
                img.setAttribute('src', 'idosaf.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    }
}
    