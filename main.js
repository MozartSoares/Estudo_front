$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {
        placeholder: 'CPF:___.___.___-__'
    })
    $('#cep').mask('00000-000', {
        placeholder: 'CEP:_____-___'
    })
})