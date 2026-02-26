export function copyToClipboard(text: string): void {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('Copiado al portapaples');
    })
    .catch((err) => {
      console.error('Error al copar al portapaples', err);
    });
}
