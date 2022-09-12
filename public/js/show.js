function show(id) {
  fetch(`/api/agenda/${id}`)
    .then(response => response.json())
    .then(res => {
      document.getElementById('nomeShow').value = res[0].name
      document.getElementById('emailShow').value = res[0].email
      document.getElementById('idadeShow').value = res[0].age
      if (res[0].gender === 'F') {
        $('#FShow').attr('checked', true)
      } else {
        $('#MShow').attr('checked', true)
      }
    })
    .catch(err => {
      console.log(err)
    })
}
