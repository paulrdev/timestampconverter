import { handleInput } from './handlers.js';

// When the page loads this code runs
export function init() {
  const form = document.querySelector('.app form');

  form.addEventListener('input', handleInput);
}
