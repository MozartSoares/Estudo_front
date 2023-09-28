$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault()
        const tarefaDigitada = $('#input').val()
        const novaTarefa = $(`<li href="#">${tarefaDigitada}</li>`)
        $(tarefaDigitada).appendTo(novaTarefa)
        novaTarefa.appendTo('ol')
        $('#input').val('')
    })
    $('ol').on('click', 'li', function() {
        $(this).addClass('realizado')
    })
})