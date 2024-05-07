const data = getData()

for (let record of data) {
  const tableBody = document.querySelector('#tbody')

  const row = document.createElement('tr')
  const nameElement = document.createElement('td')
  const ageElement = document.createElement('td')
  const cityElement = document.createElement('td')
  const editElement = document.createElement('td')
  const deleteElement = document.createElement('td')

  const editButton = document.createElement('button')
  const deleteButton = document.createElement('button')

  editButton.innerHTML = 'Edit'
  deleteButton.innerHTML = 'Delete'

  editElement.appendChild(editButton)
  deleteElement.appendChild(deleteButton)

  editButton.setAttribute('id', record.id)
  deleteButton.setAttribute('id', record.id)

  editButton.onclick = () => editRecord(record.id)
  deleteButton.onclick = () => deleteRecord(record.id)

  nameElement.innerHTML = record.name
  ageElement.innerHTML = record.age
  cityElement.innerHTML = record.city

  row.appendChild(nameElement)
  row.appendChild(ageElement)
  row.appendChild(cityElement)
  row.appendChild(editElement)
  row.appendChild(deleteElement)

  tableBody.appendChild(row)
}

function getData() {
  return localStorage.getItem('data')
    ? JSON.parse(localStorage.getItem('data'))
    : []
}

function addRecord() {
  const data = getData()

  const id = data.length
  const name = document.getElementById('name').value
  const age = document.getElementById('age').value
  const city = document.getElementById('city').value

  data.push({ id, name, age, city })

  localStorage.setItem('data', JSON.stringify(data))

  location.reload()
}

function editRecord(id) {
  const data = getData()

  const record = data.find((record) => record.id === id)

  const nameEdit = document.getElementById('name-edit')
  const ageEdit = document.getElementById('age-edit')
  const cityEdit = document.getElementById('city-edit')

  nameEdit.value = record.name
  ageEdit.value = record.age
  cityEdit.value = record.city

  const saveButton = document.querySelector('.save')

  saveButton.setAttribute('id', id)
}

function setEditedRecord() {
  const data = getData()

  const saveButton = document.querySelector('.save')
  const id = saveButton.id

  const index = data.findIndex((record) => record.id === id)

  const nameEdit = document.getElementById('name-edit')
  const ageEdit = document.getElementById('age-edit')
  const cityEdit = document.getElementById('city-edit')

  const updatedRecord = {
    id: parseInt(id),
    name: nameEdit.value,
    age: ageEdit.value,
    city: cityEdit.value,
  }

  data.splice(index, 1, updatedRecord)

  localStorage.setItem('data', JSON.stringify(data))

  location.reload()
}

function deleteRecord(id) {
  const data = getData()

  const updatedData = data.filter((record) => record.id !== id)

  localStorage.setItem('data', JSON.stringify(updatedData))

  location.reload()
}
