const containerHabilidades = document.querySelector('.container-habilidades');

const urlHabilidades = "json/habilidades.json";

    fetch(urlHabilidades)
    .then(respuesta => respuesta.json())
    .then(resultado => createContainerHabilidades(resultado));

function createContainerHabilidades(resultado) {
    resultado.forEach(habilidad => {
        const divHabilidad = document.createElement('div');
        divHabilidad.classList.add('habilidad');

        const imgHabilidad = document.createElement('img');
        imgHabilidad.classList.add('imgHabilidad');
        imgHabilidad.src = habilidad.img;

        const divComentario = document.createElement('div');
        divComentario.classList.add('habilidades-comentario');


        const subtitleHabilidades = document.createElement('h2');
        subtitleHabilidades.classList.add('habilidades__comentario--subtitle');
        subtitleHabilidades.textContent = habilidad.subtitle;

        const descripcion = document.createElement('p');
        descripcion.classList.add('proyecto__informacion--descripcion');
        descripcion.textContent = habilidad.descripcion;

        divComentario.appendChild(subtitleHabilidades);
        divComentario.appendChild(descripcion);

        divHabilidad.appendChild(imgHabilidad);
        divHabilidad.appendChild(divComentario);

        containerHabilidades.appendChild(divHabilidad);
    });
}