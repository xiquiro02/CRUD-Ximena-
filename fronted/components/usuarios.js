export const armarUsuario = (elemento, datosUsuario) => {
      const fragmento = document.createDocumentFragment();
      datosUsuario.forEach(usuario => {
        // Crear elementos
        const tarjeta = document.createElement("div");
        const botonEliminar = document.createElement("button");
        const parrafoID = document.createElement("p");
        const parrafoDocumemto = document.createElement("p");  
        const parrafoNombre = document.createElement("p");
        const parrafoGenero = document.createElement("p");
        const parrafoCiudad = document.createElement("p");
        const parrafoCorreo = document.createElement("p");    
        const botonEditar = document.createElement("button");

        //Asignamos 
        tarjeta.className = "card";
        botonEliminar.className = "btnEliminar";
        botonEditar.className = "btnEditar";
        botonEliminar.textContent = "Eliminar";
        parrafoID.textContent = `ID: ${usuario.id}`;
        parrafoDocumemto.textContent = `Documento: ${usuario.documento}`;
        parrafoNombre.textContent = `Nombre: ${usuario.nombre}`;
        parrafoGenero.textContent = `Género: ${usuario.genero_id}`;
        parrafoCiudad.textContent = `Ciudad: ${usuario.ciudad_id}`;
        parrafoCorreo.textContent = `Correo: ${usuario.correo}`;
        botonEditar.textContent = "Editar";

        tarjeta.append(botonEliminar, parrafoID, parrafoDocumemto, parrafoNombre, parrafoGenero, parrafoCiudad, parrafoCorreo, botonEditar);
        fragmento.appendChild(tarjeta);
      });
    elemento.appendChild(fragmento);
}