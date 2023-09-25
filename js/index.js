const formulario = document.getElementById('formularios');
const btn = document.getElementById('btn-formularios');

btn.addEventListener('click', ()=> {
    formulario.classList.remove('ocultar');
});