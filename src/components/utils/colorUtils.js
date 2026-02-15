 // Función que convierte el color de formato HEX a RGB
export const hexToRgb = (hex) => {
  // Usamos el método .match() para comparar el string "hex"
  // con una expresión regular que valida y separa el color en 2 partes
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

  // Si el formato no coincide con la expresión regular,
  // significa que el string no es un HEX válido. En ese caso retornamos null
  if (!match) return null;

  // Si el formato es válido, extraemos los valores R, G y B
  // match[0] es el string completo (ej: "#FF5733")
  // match[1] es el primer grupo de captura (R)
  // match[2] es el segundo grupo de captura (G)
  // match[3] es el tercer grupo de captura (B)

  // EL primer elemento no lo necesitamos, por eso usamos "," para ignorarlo
  const [, r, g, b] = match;

  // Convertimos cada valor hexadecimal a decimal. parseInt(valor, 16)
  // convierte de base 16 (hexadecimal) a base 10 (decimal)
  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16),
  };
};

export const rgbToHsl = (r, g, b) => {

  // 1. Normalizamos los valores
  // RGB viene en rango 0-255
  // HSL trabaja mejor en rango 0-1
  r /= 255;
  g /= 255;
  b /= 255;

  // 2. Encontramos el valor máximo y mínimo
  // Esto nos ayudará a calcular:
  // - La luminosidad (Lightness)
  // - La saturación
  // - Qué color domina (para calcular el Hue)
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // Declaramos variables para Hue, Saturation y Lightness
  let h, s, l;

  // 3. Calculamos la luminosidad
  // Es simplemente el promedio entre el máximo y el mínimo
  // Si ambos son altos → color claro
  // Si ambos son bajos → color oscuro
  l = (max + min) / 2;

  // 4. Si max y min son iguales...
  // Significa que no hay diferencia entre colores
  // Es un gris → no tiene tono ni saturación
  if (max === min) {

    h = 0; // No hay tono (Hue)
    s = 0; // No hay saturación

  } else {

    // 5. Calculamos la diferencia
    // Esto mide qué tan separados están los valores
    const d = max - min;

    // 6. Calculamos la saturación
    // La fórmula cambia dependiendo si el color es claro u oscuro
    // Porque la percepción de saturación cambia según la luminosidad
    s = l > 0.5
      ? d / (2 - max - min)  // Para colores claros
      : d / (max + min);     // Para colores oscuros

    // 7. Calculamos el Hue (tono)
    // Depende de cuál color es el dominante (el mayor)

    switch (max) {

      case r:
        // Si domina el rojo
        // El tono está entre amarillo y magenta
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        // Si domina el verde
        // El tono está entre cyan y amarillo
        h = (b - r) / d + 2;
        break;

      case b:
        // Si domina el azul
        // El tono está entre magenta y cyan
        h = (r - g) / d + 4;
        break;
    }

    // Normalizamos el hue a rango 0-1
    h /= 6;
  }

  // 8. Convertimos a formato final más entendible
  // Hue → grados (0-360)
  // Saturation → porcentaje (0-100)
  // Lightness → porcentaje (0-100)

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}
