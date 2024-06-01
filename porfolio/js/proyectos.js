const containerProyectos = document.querySelector('.container-proyectos');

const urlProyectos = "json/proyectos.json";

fetch(urlProyectos)
    .then(respuesta => respuesta.json())
    .then(resultado => createContainerProyect(resultado));


function createContainerProyect(result) {
    result.forEach( proyecto => {
        const divProyecto = document.createElement('div');
        divProyecto.classList.add('proyecto');
    
        const imgProyecto = document.createElement('img');
        imgProyecto.src = proyecto.img;
    
        const divTexto = document.createElement('div');
        divTexto.classList.add('proyecto__informacion');
    
    
        const subtitle = document.createElement('h2');
        subtitle.classList.add('proyecto__informacion--subtitle');
        subtitle.textContent = proyecto.subtitle;
    
        const parrafo = document.createElement('p');
        parrafo.classList.add('proyecto__informacion--text');
        parrafo.textContent = proyecto.descripcion;
    
        const btnweb = document.createElement('a');
        btnweb.classList.add('button-card');
        btnweb.textContent = 'Sitio web';
        btnweb.setAttribute("target", "_blank");
        btnweb.href = proyecto.web;
    
        const btnGithub = document.createElement('a');
        btnGithub.classList.add('button-card');
        btnGithub.textContent = 'Github';
        btnGithub.setAttribute("target", "_blank");
        btnGithub.href = proyecto.github;
    
        divTexto.appendChild(subtitle);
        divTexto.appendChild(parrafo);
        divTexto.appendChild(btnweb);
        divTexto.appendChild(btnGithub);
    
        divProyecto.appendChild(imgProyecto);
        divProyecto.appendChild(divTexto);
    
        containerProyectos.appendChild(divProyecto);
    });
}