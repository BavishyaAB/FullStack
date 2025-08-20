import axios from 'axios'
const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api'
const getAllCountries = () => {
  return axios.get(`${baseURL}/all`).then(response => {
    // console.log('Response data:', response.data)
    return response.data
  })
}
const getCountryInfo = (name) => {
  return axios.get(`${baseURL}/name/${name}`).then(response => {
    console.log('Response data:', response.data)
    return response.data
  })
}
export default { getAllCountries, getCountryInfo }