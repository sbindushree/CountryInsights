import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import { getAllCountries } from "./services/countriesService";
import Header from "./components/Header";
import Home from "./components/Home";
import CountryDetail from "./components/CountryDetail";




const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    getAllCountries().then((result) => {
      setIsLoaded(true);
      setCountries(result);
    });
  }, [setCountries]);

  if (!isLoaded) {
    return <div>Loading Please wait...</div>;
  }

  return (
    <>
     <Header />
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <Home countries={countries} />
    
          </Route>
          <Route exact path="/:countryCode">
            <CountryDetail countries={countries} />
          </Route>
        </Switch>
      </BrowserRouter>
    
    </>
  );
};

export default App;
