// mostrar las imágenes al hacer clic en table cells 3x3
document.getElementById('tableIcon').addEventListener('click', function() {
  document.getElementById('gridContainer').style.display = 'block'; // Muestra la cuadrícula
  document.getElementById('columnContainer').style.display = 'none'; // Oculta la vista en columna
});

// mostrar las imágenes al hacer clic en square columna
document.getElementById('squareIcon').addEventListener('click', function() {
  document.getElementById('gridContainer').style.display = 'none'; // Oculta la cuadrícula
  document.getElementById('columnContainer').style.display = 'block'; // Muestra la vista en columna
});
