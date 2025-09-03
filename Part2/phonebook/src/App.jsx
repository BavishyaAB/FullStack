import { useState } from 'react'
import Person from './Components/Person'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Notification from './Components/Notification'
import { useEffect } from 'react'
import PersonService from './Services/PersonService'

function App() {
  const originalPersons = []
  PersonService.getAllPersons().then(response => { originalPersons.push(...response) })
  const [persons, setPersons] = useState([])
  useEffect(() => {
    PersonService.getAllPersons().then(response => {
      setPersons([...response])
    })
  }, [])
const handleAddPerson = (e) => {
  e.preventDefault()
  const newPerson = {
    name: newName,
    number: newNumber, 
  }
  if(persons.some(person => person.name === newName)) {
    //alert(`${newName} is already added to phonebook`)
    if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const existingPerson = persons.find(person => person.name === newName)
      console.log('Found Person:',existingPerson)
      const updatedPerson = { ...existingPerson, number: newNumber }
      PersonService.updatePerson(existingPerson.id, updatedPerson,setMessage,setType).then(response => {
        console.log('Updated person:', response)
        setPersons(persons.map(person => person.id === existingPerson.id ? response : person))
        setMessage(`Updated ${newName}'s number`)
        setType('success')
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      }).catch(error => {
        console.log('Error updating person:', error)
        setMessage(`Information of ${updatedPerson.name} has already been removed from server`)
        setType('error')
        setTimeout(() => {
          setMessage(null)
          setType(null)
        }, 5000)
      })
    }
    setName('')
    setNumber('')
    return
  }
  PersonService.createPerson(newPerson).then(response => {
    setMessage(`Added ${newName} to phonebook`)
    setType('success')
    setTimeout(() => {
      setMessage(null)
    }, 5000)
    setPersons(persons.concat(newPerson))
    console.log('New person added:', response)
  }).catch(error => {
    setMessage(error.response.data.error)
    setType('error')
    setTimeout(() => {
      setMessage(null)
      setType(null)
    }, 5000)
  })
  setName('')
  setNumber('')
}
const filterPersons = (e) => {
  const searchTerm = e.target.value
  console.log("SearchTerm:", searchTerm)
  if(searchTerm === '') {
    console.log('Original persons:', originalPersons)
    setPersons(originalPersons)
    console.log('Resetting to original list',originalPersons)
  }
  else {
    const filtered = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setPersons(filtered)
  }
  
}
const handleDeletePerson = (id) => {
  if(window.confirm(`Delete ${persons.find(person => person.id === id).name}?`)) {
    PersonService.deletePerson(id).then(response => {
      console.log('Person deleted:', response)
      setPersons(persons.filter(person => person.id !== id))
    })
  }
}
const [newName,setName] = useState('')
const [newNumber,setNumber] = useState('')
const [message, setMessage] = useState(null)
const [messageType, setType] = useState('success')

  return (
    <>
      <div>
      <h2>Phonebook</h2>
      <Notification message={message} type = {messageType} />
      <Filter filterPersons={filterPersons} />
      <h2>Add a new</h2>
      <PersonForm
        onSubmit={handleAddPerson}
        newName={newName}
        setName={setName}
        newNumber={newNumber}
        setNumber={setNumber}
      />
      <h2>Numbers</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {persons.map((person) => (
            <Person key={person.id} person={person} deletePerson={handleDeletePerson} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
