var fSesion = document.getElementById('formIniciarSesion')
fSesion.addEventListener('submit', function(e){
    e.preventDefault()
    var datos= new FormData(fSesion)
    console.log(datos.get('usuario'))
    console.log(datos.get('contraini'))

})