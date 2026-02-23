export const armarUsuario = (elemento, datos) => {
        const fragmento = document.createDocumentFragment();
        datos.array.forEach(usuario => {
        // Crear 
        const tarjeta = document.createElement("div");
        const botonEliminar = document.createElement("button");
        const titulo = document.createElement("p");
        const contenido = document.createElement("p");
        const botonEditar = document.createElement("button");

        //Asignamos 
        tarjeta.className = "card";
        botonEliminar.textContent = "Eliminar";
        for(nombreContenido in elemento)
        {
            titulo.textContent = nombreContenido;
            contenido.textContent = nombreContenido[nombreContenido];
        }
        botonEditar.textContent = "Editar";
        tarjeta.appendChild(botonEliminar, titulo, contenido, botonEditar);
        fragmento.append(tarjeta);
    });
    elemento.append(fragmento);
}