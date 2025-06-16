import { enToUkMap, ukToEnMap } from './keyboardMap';

export function transliterate(text, direction = 'enToUk') {
  const map = direction === 'enToUk' ? enToUkMap : ukToEnMap;
  let result = '';

  for (let char of text) {
    const lowerChar = char.toLowerCase();
    const mappedChar = map[lowerChar];

    if (mappedChar) {
      // Зберігаємо регістр
      result += char === lowerChar ? mappedChar : mappedChar.toUpperCase();
    } else {
      result += char;
    }
  }

  return result;
}
