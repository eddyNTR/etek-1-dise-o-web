//Header
function renderHeader() {
    document.getElementById('header').innerHTML = `
      <header class="text-center my-4">
        <h1>Mi Sitio de Usuarios</h1>
      </header>
    `;
  }
  
//UserCard
function crearUserCard(imagen, descripcion) {
    const card = document.createElement('div');
    card.className = 'col-md-4';
    card.innerHTML = `
      <div class="card user-card shadow-sm" >
        <img src="${imagen}" class="card-img-top" style="width: 100%; height: 500px;" alt="">
        <div class="card-body">
          <p class="card-text">${descripcion}</p>
        </div>
      </div>
    `;
    return card;
}
  
//contenido principal
function contenidopirncipal() {
    const main = document.getElementById('contenedor-principal');
    main.innerHTML = `
      <div class="row g-4" style="margin: 70px" id="cardsContainer"></div>
    `;
  
    const container = document.getElementById('cardsContainer');
    container.appendChild(crearUserCard('cuatro.avif', 'Juan Pérez - Desarrollador Frontend'));
    container.appendChild(crearUserCard('cuatro.avif', 'Juan Pérez - Desarrollador Frontend'));
    container.appendChild(crearUserCard('descargar (1).jpeg', 'María Gómez - Diseñadora UX/UI'));
    container.appendChild(crearUserCard('descargar (1).jpeg', 'María Gómez - Diseñadora UX/UI'));
    container.appendChild(crearUserCard('descargar (3).jpeg', 'Carlos Sánchez - Ingeniero de Software'));
    container.appendChild(crearUserCard('descargar (3).jpeg', 'Carlos Sánchez - Ingeniero de Software'));
  }
  
//Footer
function footer() {
    document.getElementById('footer').innerHTML = `
      <footer class="text-center mt-5 py-3 bg-light">
        <p class="mb-0">© 2025 Mi Sitio de Usuarios. Todos los derechos reservados.</p>
      </footer>
    `;
}
  
// Ejecutar la renderización de los componentes
renderHeader();
contenidopirncipal();
footer();
  