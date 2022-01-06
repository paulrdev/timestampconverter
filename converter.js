import { init } from './init.js';

// start the app!
// const app = document.querySelector('.app');

// app.addEventListener('mouseenter',init, {once: true});

const timestampInput = document.querySelector('input[name="from_timestamp"]');
timestampInput.addEventListener('input', init, { once: true });
