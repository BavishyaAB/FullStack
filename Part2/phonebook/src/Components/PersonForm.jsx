const PersonForm = ({ onSubmit, newName, setName, newNumber, setNumber }) => {
  return (
    <form onSubmit={onSubmit}>
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
  )
}

export default PersonForm
