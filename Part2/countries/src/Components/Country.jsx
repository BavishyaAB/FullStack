const Country = ({ countryInfo }) => {
  return (
    <>
      {countryInfo.name && (
        <div>
          <h2>{countryInfo.name.common}</h2>
          <p>Capital: {countryInfo.capital ? countryInfo.capital[0] : "N/A"}</p>
          <p>Area: {countryInfo.area.toLocaleString()} km²</p>
          <h3>Languages:</h3>
          <ul>
            {Object.values(countryInfo.languages || {}).map(
              (language, index) => (
                <li key={index}>{language}</li>
              )
            )}
          </ul>
          <img
            src={countryInfo.flags.svg}
            alt={`Flag of ${countryInfo.name.common}`}
            style={{ width: "150px", height: "auto" }}
          />
        </div>
      )}
    </>
  );
};
export default Country;
