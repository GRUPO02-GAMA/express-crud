async function remove(id) {
  const resposta = confirm('Deseja realmente excluir?')
  if (resposta) {
    await fetch(`/api/agenda/${id}`, {
      method: 'DELETE'
    })
    window.location.reload()
  }
}
