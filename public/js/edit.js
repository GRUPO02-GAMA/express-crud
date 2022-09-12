function edit(id) {
  fetch(`/api/agenda/${id}`)
    .then(response => response.json())
    .then(res => {
      document.getElementById('nomeEdit').value = res[0].name
      document.getElementById('emailEdit').value = res[0].email
      document.getElementById('idadeEdit').value = res[0].age
      if (res[0].gender === 'F') {
        $('#FEdit').attr('checked', true)
      } else {
        $('#MEdit').attr('checked', true)
      }

      var input = document.createElement('input')
      input.type = 'hidden'
      input.value = id
      input.id = 'elIndex'
      form.appendChild(input)
    })
    .catch(err => {
      console.log(err)
    })

  $(document).on('submit', '#formEdit', async e => {
    e.preventDefault()

    var elIndex = document.getElementById('elIndex')

    const form = {
      name: $('#nomeEdit').val(),
      age: $('#idadeEdit').val(),
      gender: $('#FEdit').is(':checked') ? 'F' : 'M',
      email: $('#emailEdit').val()
    }

    await fetch(`/api/agenda/${elIndex.value}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    window.location.reload()
  })
}

