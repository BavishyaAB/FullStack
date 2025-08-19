import { useState } from 'react'

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
    number: newNumber
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
const filterPersons = (searchTerm) => {
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
        Filter with <input type="text" placeholder="Search..." onChange={(e) => filterPersons(e.target.value)}/>
      <h2>Add a new</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          Name: <input value={newName} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {persons.map((person) => (
            <li key={person.id}>{person.name}&nbsp;&nbsp;{person.number}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
