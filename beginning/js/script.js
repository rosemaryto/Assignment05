


window.addEventListener('load', () => {
    "use strict";
var ideInput = document.getElementById('ide');
var nameInput = document.getElementById('nam');
var extInput = document.getElementById('ext');
var emaInput = document.getElementById('ema');
var depInput = document.getElementById('dep');
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('ID: ' + ideInput.value + '\n' + 'Name:' + nameInput.value + '\n' +  'Extension:' + extInput.value + '\n' + 'Email:' + emaInput.value +  '\n' + 'Department:' + depInput.value);
});


});
