import { useState } from 'react'

function App() {
const [persons, setPersons] = useState([
  { name: 'Arto Hellas',number: '040-123456'},
])
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
  console.log('Added:', newPerson)
  console.log('Current persons:', persons)
  console.log('New persons:', persons.concat(newPerson))
  console.log('New name:', newName)
}
const [newName,setName] = useState('')
const [newNumber,setNumber] = useState('')

  return (
    <>
      <div>
      <h2>Phonebook</h2>
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
            <li key={person.name}>{person.name} {person.number}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
