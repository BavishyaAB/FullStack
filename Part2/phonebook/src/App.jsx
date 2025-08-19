import { useState } from 'react'
import Person from './Components/Person'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'

function App() {
  const originalPersons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
] // Keep a copy of the original list
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
