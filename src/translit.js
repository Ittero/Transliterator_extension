// src/translit.js
import { enToUkMap, ukToEnMap } from './keyboardMap';

export function transliterate(text, direction = 'enToUk') {
  const map = direction === 'enToUk' ? enToUkMap : ukToEnMap;

  return text
    .split('')
    .map((char) => map[char] || char)
    .join('');
}
