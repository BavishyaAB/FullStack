import { useState } from 'react'

function App() {
const [persons, setPersons] = useState([
  { name: 'Arto Hellas'},
])
const handleAddPerson = (e) => {
  e.preventDefault()
  const newPerson = {
    name: newName,
  }
  setPersons(persons.concat(newPerson))
  setName('')
  console.log('Added:', newPerson)
  console.log('Current persons:', persons)
  console.log('New persons:', persons.concat(newPerson))
  console.log('New name:', newName)
}
const [newName,setName] = useState('')
  return (
    <>
      <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          Name: <input value={newName} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {persons.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
