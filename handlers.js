import { validateTimestamp, convert } from './lib.js';
import { fromInput, toEl, alertEl } from './elements.js';

export function handleInput() {
  console.log('HERE!!!');

  // If input is empty do not continue
  if (fromInput.value === '') {
    toEl.textContent = '';
    alertEl.style.opacity = '0';
    // Else check the timestamp and attempt conversion
  } else if (validateTimestamp(fromInput.value)) {
    // Convert into normal date
    const convertedDate = convert(fromInput.value);
    toEl.textContent = convertedDate;

    // Make sure the validation error is not shown
    alertEl.style.opacity = '0';

    // Else its not a valid timestamp format
  } else {
    // Clear the date
    toEl.textContent = '';
    // Show validation error
    alertEl.style.opacity = '1';
  }
}
