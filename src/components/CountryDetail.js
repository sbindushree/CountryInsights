import React from "react";
import { useParams } from "react-router-dom";

import '../App.css';
import { Link } from "react-router-dom";


const CountryDetail = ({ countries }) => {
  const { countryCode } = useParams();
  const thisCountry = countries.find(
    (country) => country.alpha3Code === countryCode
  );
  if (!thisCountry) {
    return <div></div>;
  }

  const borderCountries = thisCountry.borders.map((countryCode) =>
    countries.find((country) => country.alpha3Code === countryCode)
  );

  borderCountries.sort();

  return (
    <div className="countryContainer">
      <Link className="linkBtn" to="/">
       
        <div>Back</div>
      </Link>
      <div className="detailContainer">
        <div
          className="flag"
          style={{ backgroundImage: `url(${thisCountry.flag})` }}
        ></div>
        <div className="textContainer">
          <h1>{thisCountry.name}</h1>
          <div className="countryText">
            <div>
              <span>Native Name: </span>
              {thisCountry.altSpellings[1]}
            </div>
           
            <div>
              <span>Population: </span>
              {/* <NumberFormat
                className="numberFormat"
                thousandSeparator={true}
                value={thisCountry.population}
                readOnly
              /> */}
            </div>
            <div>
              <span>Currencies: </span>
              {thisCountry.currencies[0].name}
            </div>
            <div>
              <span>Region: </span>
              {thisCountry.region}
            </div>
            <div>
              <span>Languages: </span>
              {thisCountry.languages.map((lang) => lang.name).join(", ")}
            </div>
            
            <div>
              <span>Capital: </span>
              {thisCountry.capital}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
