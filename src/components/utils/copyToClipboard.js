export const copyToClipboard = (text) => {
  // Usamos la API moderna del navegador para acceder al portapapales
  // navigator.clipboard nos da acceso a métodos como writeText()
  navigator.clipboard

    .writeText(text)

    // wirteText()
    // .then() se ejecuta si la operación fue exitosa
    .then(() => {
      console.log('Copiado al portapapeles');
    })
    // .catch() se ejecuta si la operación falló
    // - No hay permiso
    // - No es HTTPS
    // - El navegador no lo soporta
    .catch((err) => {
      console.error('Error al copiar al portapapeles', err);
    });
};
