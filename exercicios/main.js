const form = document.getElementById('formulario');

let campoMenor = document.getElementById('numeroA')
let campoMaior = document.getElementById('numeroB')

function validaNumero(campoMenor, campoMaior) {
    return campoMenor < campoMaior
} //retorna true se for valido e false se for invalido

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const msgSucesso = `O número ${campoMaior.value} é maior que o número ${campoMenor.value} então o formulário é valido.`
    const msgErro = `O número ${campoMaior.value} não é maior que o número ${campoMenor.value} então não se pode validar o formulário.`

    if (validaNumero(campoMenor.value, campoMaior.value) === true) {
        alert(msgSucesso)

        campoMaior.value = '';
        campoMenor.value = '';

    } else {
        alert(msgErro)
    }
})
