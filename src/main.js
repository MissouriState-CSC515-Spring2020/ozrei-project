/* eslint-disable indent */
// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules

import 'bootstrap';

let span = document.querySelector('#time-now');

function main() {
    span.textContent = 'Hello World';
}

main();
