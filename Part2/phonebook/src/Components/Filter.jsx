const Filter = ({ filterPersons }) => {
  return (
    <div>
      Filter with <input type="text" placeholder="Search..." onChange={e => filterPersons(e)} />
    </div>
  )
}

export default Filter
