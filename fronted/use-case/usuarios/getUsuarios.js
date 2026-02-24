export const getUsuarios = async () => {
  const solicitud = await fetch('http://localhost:3000/usuarios');
  const datos = await solicitud.json();
  return datos;
}