import { formatLabel } from './format-label.js';

export function createMessage(label) {
  return `Message: ${formatLabel(label)}`;
}
