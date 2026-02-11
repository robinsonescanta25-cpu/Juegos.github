var botonInicio = document.getElementById('startBtn');

botonInicio.onclick = function() {
    // Limpiar pantalla
    document.body.innerHTML = '';

    // Crear contenedor del juego
    var juego = document.createElement('div');
    juego.style.textAlign = 'center';
    juego.style.marginTop = '50px';

    var titulo = document.createElement('h1');
    titulo.innerText = 'Elige el pais correcto: España, Francia o Italia';
    juego.appendChild(titulo);

    var paises = ['España', 'Francia', 'Italia'];
    var paisCorrecto = 'Francia';

    for (var i = 0; i < paises.length; i++) {
        (function(pais) {
            var boton = document.createElement('button');
            boton.innerText = pais;
            boton.style.margin = '10px';
            boton.style.padding = '15px 30px';
            boton.style.fontSize = '20px';
            boton.style.borderRadius = '10px';
            boton.style.cursor = 'pointer';

            if (pais == 'España') boton.style.backgroundColor = '#1e90ff';
            if (pais == 'Francia') boton.style.backgroundColor = '#2ed573';
            if (pais == 'Italia') boton.style.backgroundColor = '#ff4757';
            boton.style.color = 'white';
            boton.style.border = 'none';

            boton.onclick = function() {
                if (pais == paisCorrecto) {
                    alert('Acertaste!');
                } else {
                    alert('Ups, intenta de nuevo');
                }
            }

            juego.appendChild(boton);
        })(paises[i]);
    }

    document.body.appendChild(juego);
};
