function changeDepth() {
    var imagen = document.getElementById('imagen');
    imagen.style.transform = 'scale(1.25)'; // Puedes ajustar el valor según tu preferencia
}

function resetDepth() {
    var imagen = document.getElementById('imagen');
    imagen.style.transform = 'scale(1)';
}

var boton = document.getElementById('animatedButton');
boton.addEventListener('mouseover', changeDepth);
boton.addEventListener('mouseout', resetDepth);

  