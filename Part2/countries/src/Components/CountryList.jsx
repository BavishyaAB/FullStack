const CountryList = ({ countries }) => {
  return (
    <>
      {countries.length > 0 && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {countries.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CountryList;
