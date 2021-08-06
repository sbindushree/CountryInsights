import React, { useState } from "react";
import SearchComponent from "./SearchComponent";
import FilterComponent from "./FilterComponent";
import CountryList from "./CountryList";
import '../App.css';


const Home = ({ countries }) => {
    const [language, setLanguage] = useState("");
    const [filteredCountry, setFilteredCountry] = useState("");
    const searchParam = ["capital", "name"];

    const handleChangeCountry = (e) => {
        setFilteredCountry(e.target.value);
      };

      const handleChangeReg = (e) => {
        setLanguage(e.target.value);
      };

      const search = (items) =>
      items.filter((item) =>
        searchParam.some(
          (newItem) =>
            item[newItem].toString().toLowerCase().indexOf(filteredCountry.toLowerCase()) > -1
        )
      );

      const activeCountries = search(countries).filter((country) => {
        
        return language === "" || country.languages.filter(item => item.iso639_1 === language) > 0 ;
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