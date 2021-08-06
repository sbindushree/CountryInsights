import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const CountryList = ({ countries }) => {
  return (
    <div className="countryList">
      {countries.map((country) => (
        <div key={country.alpha3Code} className="country">
          <Link to={`/${country.alpha3Code}`}>
            <div
              className="flagContainer"
              style={{ backgroundImage: `url(${country.flag})` }}
            ></div>
            <div className="countryDesc">
              <div className="countryName">{country.name}</div>
              <div className="population">
                <span> Population : </span>{country.population}
                {/* <NumberFormat
                  className="numberFormat"
                  thousandSeparator={true}
                  value={country.population}
                  readOnly
                /> */}
              </div>
              <div className="region">
                <span>Region : </span>
                {country.region}
              </div>
              <div className="capital">
                <span>Capital : </span>
                {country.capital}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
