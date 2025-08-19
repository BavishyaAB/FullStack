import { useState } from 'react'
import Person from './Components/Person'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const originalPersons = [] 
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        originalPersons.push(...response.data)
        console.log('Original persons:', originalPersons)
        setPersons(originalPersons)
      })
  }, [])
const [persons, setPersons] = useState([...originalPersons])
const handleAddPerson = (e) => {
  e.preventDefault()
  const newPerson = {
    name: newName,
    number: newNumber,
    id: persons.length + 1 // Simple ID generation
  }
  if(persons.some(person => person.name === newName)) {
    alert(`${newName} is already added to phonebook`)
    setName('')
    setNumber('')
    return
  }
  setPersons(persons.concat(newPerson))
  setName('')
  setNumber('')
}
const filterPersons = (e) => {
  const searchTerm = e.target.value
  console.log(searchTerm)
  if(searchTerm === '') {
    setPersons(originalPersons)
    console.log('Resetting to original list',originalPersons)
  }
  else {
    const filtered = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setPersons(filtered)
  }
  
}
const [newName,setName] = useState('')
const [newNumber,setNumber] = useState('')

  return (
    <>
      <div>
      <h2>Phonebook</h2>
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
            <Person key={person.id} person={person} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
