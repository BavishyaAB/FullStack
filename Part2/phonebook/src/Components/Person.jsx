const Person = ({ person, deletePerson }) => {
  return (
    <><li>
      {person.name} {person.number}
      &nbsp;<button onClick={() => deletePerson(person.id)}>Delete</button>
    </li></>
  )
}

export default Person