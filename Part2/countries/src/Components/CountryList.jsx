const CountryList = ({ countries, handleCountrySelect }) => {
  return (
    <>
      {countries.length > 0 && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {countries.map((name) => (
            <li key={name}>{name}
            <button onClick={() => handleCountrySelect(name)}>Show</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CountryList;
