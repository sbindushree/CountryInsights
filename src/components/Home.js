import React, { useState } from "react";
import SearchComponent from "./SearchComponent";
import FilterComponent from "./FilterComponent";
import CountryList from "./CountryList";
import '../App.css';


const Home = ({ countries }) => {
    const [region, setRegion] = useState("");
    const [filteredCountry, setFilteredCountry] = useState("");
    const searchParam = ["capital", "name"];

    const handleChangeCountry = (e) => {
        setFilteredCountry(e.target.value);
      };

      const handleChangeReg = (e) => {
        setRegion(e.target.value);
      };

      const search = (items) =>
      items.filter((item) =>
        searchParam.some(
          (newItem) =>
            item[newItem].toString().toLowerCase().indexOf(filteredCountry.toLowerCase()) > -1
        )
      );

      const activeCountries = search(countries).filter((country) => {
        return region === "" || country.region === region;
      });


return(
    <div className="homeContainer">
      <div className="homeNav">
        <SearchComponent onChange={handleChangeCountry} value={filteredCountry} />
        <FilterComponent onChange={handleChangeReg} />
      </div>
      <CountryList countries={activeCountries} />
    </div>
);
};

export default Home;