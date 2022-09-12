fetch('/api/agenda')
  .then(response => response.json())
  .then(res => {
    for (let i = 0; i < res.length; i++) {
      const el = res[i]
      $('#agenda tbody').append(
        `<tr>
                <td>${el.id}</td>
                <td>${el.name}</td>
                <td>${el.email}</td>
                <td class="text-center">${el.age}</td>
                <td class="text-center">${el.gender}</td>
                <td class="text-center" nowrap>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#editar" onclick="edit(${el.id})">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button type="button" class="btn" onclick="remove(${el.id})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#visualizar" onclick="show(${el.id})">
                        <i class="fa-solid fa-eye"></i>
                    </button>
                </td>
            </tr>`
      )
    }
  })
  .catch(err => {
    alert(err)
  })
