function create(e) {
    e.preventDefault();

    const request = {
        name: $('#nome').val(),
        age: $('#idade').val(),
        gender: $('#F').is(':checked') ? 'F' : 'M',
        email: $('#email').val(),
    }

    $.post('/api/agenda', request, function(res, status, jqXHR) {
        if(res.error == false) {
            alert('Contato adicionado');
            $('#cadastro').hide();
            window.location.reload();
        }
    });
}