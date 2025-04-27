function crearUserCard(imagen, descripcion) {
    const card = document.createElement('div');
    card.className = 'col-md-4';

    card.innerHTML = `
      <div class="card user-card shadow-sm h-100">
        <img src="${imagen}" class="card-img-top" alt="Imagen de usuario">
        <div class="card-body">
          <p class="card-text">${descripcion}</p>
        </div>
      </div>
    `;
    document.getElementById('cardsContainer').appendChild(card);
  }

  crearUserCard('descargar (1).jpeg', 'Maria Torres - Desarrollador Frontend');
  crearUserCard('cuatro.avif', 'Juan Perez - Diseñador UX/UI');
  crearUserCard('cuatro.avif', 'Juan Perez - Diseñador UX/UI');
  crearUserCard('cuatro.avif', 'Juan Perez - Diseñador UX/UI');
  crearUserCard('descargar (3).jpeg', 'Carlos Sanchez - Ingeniero de Software');
  crearUserCard('descargar (3).jpeg', 'Carlos Sanchez - Ingeniero de Software');