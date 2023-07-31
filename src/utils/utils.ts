export function generateRandomId(longitud: number) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let idAleatorio = '';
  
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    idAleatorio += caracteres.charAt(indiceAleatorio);
  }
  
  return idAleatorio;
}
