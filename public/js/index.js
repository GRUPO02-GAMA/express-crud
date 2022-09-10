
fetch('/api/agenda')
    .then((response) => response.json())
    .then((res) => {
        for (let i = 0; i < res.length; i++) {
            const el = res[i];
            $('#agenda tbody').append(
                `<tr>
                <td>${el.id}</td>
                <td>${el.name}</td>
                <td>${el.email}</td>
                <td>${el.age}</td>
                <td>${el.gender}</td>
            </tr>`
            )
        }
    })
    .catch((err) => {
    });


function open() {
    document
        .querySelector('.modal-overlay')
        .classList
        .add('active')
}

function close() {
    document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
}

var item = document.getElementById('novo');
var cancel = document.getElementById('cancelar');

item.addEventListener('click', open);
cancel.addEventListener('click', close);

