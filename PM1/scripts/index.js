class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.id = 1;
  }
  createActivity(title, description, imgUrl) {
    const activity = new Activity(this.id, title, description, imgUrl);
    this.activities.push(activity);
    this.id++;
  }

  getAllActivities() {
    return this.activities;
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((act) => act.id !== id);
  }
}
const agregar = document.getElementById("agregar");
const repo = new Repository();

function seccionTarjetas(activities) {
  const { id, title, description, imgUrl } = activities;

  const nuevoContenedorTarjeta = document.createElement("div");
  nuevoContenedorTarjeta.className = "activitiesdiv";

  const tituloTarjeta = document.createElement("h3");
  tituloTarjeta.textContent = title;

  const descriptionTarjeta = document.createElement("p");
  descriptionTarjeta.textContent = description;

  const imgTarjeta = document.createElement("img");
  imgTarjeta.src = imgUrl;
  imgTarjeta.alt = title;
  imgTarjeta.className = "fotoTarjeta";

  const deleteBoton = document.createElement("button");
  deleteBoton.textContent = "Eliminar Tarjeta";
  deleteBoton.onclick = () => {
    repositorio.deleteActivity(id);
    renderTarjeta();
  };
  nuevoContenedorTarjeta.appendChild(tituloTarjeta);
  nuevoContenedorTarjeta.appendChild(descriptionTarjeta);
  nuevoContenedorTarjeta.appendChild(imgTarjeta);
  nuevoContenedorTarjeta.appendChild(deleteBoton);
  return nuevoContenedorTarjeta;
}

function renderTarjeta() {
  const tarjetas = document.getElementById("Activities");
  tarjetas.innerHTML = "";
  const tarjetasRepo = repo.getAllActivities();
  tarjetasRepo.forEach((activities) => {
    const tarjetaActividad = seccionTarjetas(activities);
    tarjetas.appendChild(tarjetaActividad);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("formularioActividad")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const titulo = document.getElementById("titulo-form").value;
      const descripcion = document.getElementById("descripcion-form").value;
      const url = document.getElementById("imagen-form").value;

      repo.createActivity(titulo, descripcion, url);
      renderTarjeta();
      document.getElementById("formularioActividad").reset();
    });

  renderTarjeta();
});
