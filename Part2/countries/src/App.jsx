import { useEffect } from "react";
import { useState } from "react";
import CountryService from "./Services/CountryService";
import Search from "./Components/Search";
import Message from "./Components/Message";
import CountryList from "./Components/CountryList";
import Country from "./Components/Country";

function App() {
  const [countryName, setCountryName] = useState("");
  // State to hold the list of countries
  const [countries, setCountries] = useState([]);
  // State to hold country information
  const [countryInfo, setCountryInfo] = useState({});
  const [countryList, setCountryList] = useState([]);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    // Fetch countries data from API
    CountryService.getAllCountries()
      .then((data) => {
        setCountries(data.map((country) => country.name.common));
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);
  const handleSearch = (name) => {
    setCountryName(name);
    if (name === "") {
      setCountryList([]);
      setCountryInfo({});
      setMessage(null);
      return;
    }
    const filteredCountries = countries.filter((country) =>
      country.toLowerCase().includes(name.toLowerCase())
    );
    if (
      filteredCountries.length === 1 ||
      filteredCountries.some(
        (country) => country.toLowerCase() === name.toLowerCase()
      )
    ) {
      console.log("Single country match found:", filteredCountries);
      let singleMatch = filteredCountries.find(
        (country) => country.toLowerCase() === name.toLowerCase()
      );
      singleMatch = singleMatch !== undefined ? singleMatch : filteredCountries[0];
      console.log("Single country match:", singleMatch);
      // If exactly one country matches, fetch its detailed information
      CountryService.getCountryInfo(singleMatch)
        .then((data) => {
          setCountryInfo(data);
          setMessage(null);
          setCountryList([]); // Clear country list when showing single match
        })
        .catch((error) => {
          console.error("Error fetching country info:", error);
          setMessage("Error fetching country information");
        });
    } else if (filteredCountries.length > 10) {
      // If multiple countries match, clear country info
      setCountryInfo({});
      setMessage(`Too many matches for "${name}". Specify another filter.`);
      setCountryList([]); // Clear country list when showing too many matches
    } else if (filteredCountries.length > 1) {
      console.log("Multiple countries match:", filteredCountries.length);
      // If no countries match, clear country info
      const countryNames = [...new Set(filteredCountries)];
      setCountryList(countryNames);
      setMessage(null);
      setCountryInfo({}); // Clear country info when showing multiple matches
    }
  };
  return (
    <>
      <h1>Countries</h1>
      <Search countryName={countryName} handleSearch={handleSearch} />
      <Message message={message} />
      <CountryList countries={countryList} />
      <Country countryInfo={countryInfo} />
    </>
  );
}

export default App;
