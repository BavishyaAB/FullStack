import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAllPersons = () => {
  return axios.get(baseURL).then(response => {
    console.log('Response data:', response.data)
    return response.data
  })
}

const createPerson = (newPerson) => {
  return axios.post(baseURL, newPerson).then(response => {
    console.log('Created person:', response.data)
    return response.data
  })
}

const updatePerson = (id, updatedPerson) => {
  return axios.put(`${baseURL}/${id}`, updatedPerson).then(response => {
    console.log('Updated person:', response.data)
    return response.data
  })
}

const deletePerson = (id) => {
  return axios.delete(`${baseURL}/${id}`).then(response => {
    console.log('Deleted person:', response.data)
    return response.data
  })
}

export default {
  getAllPersons,
  createPerson,
  updatePerson,
  deletePerson
}
