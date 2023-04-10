import React from "react";

const Country = ({ data }) => {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    currencies,
    languages
  } = data[0];

  // Creates an array of currencies
  const currenciesArr = Object.values(currencies);

  const formattedCurrencies = currenciesArr
  .map(currency => currency.name)
  .join(", ")

  // Creates an array of languages
  const languagesArr = Object.values(languages);

  const formattedLanguages = languagesArr
  .join(", ")

  return (
    <div id="country-container">
      <div id="country-flag">
        <img src={flags.png} id="flag" alt={`Flag of ${name.common}`} />
      </div>
      <div id="country-content">
        <h1>{name.common}</h1>
        <div className="country-info">
          <div className="info-item">
            <div className="info-label">Official Name:</div>
            <div className="info-value">{name.official}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Population:</div>
            <div className="info-value">{population}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Region:</div>
            <div className="info-value">{region}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Sub-region:</div>
            <div className="info-value">{subregion}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Capital:</div>
            <div className="info-value">{capital}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Currencies:</div>
            <div className="info-value">{formattedCurrencies}</div>
          </div>
          <div className="info-item">
            <div className="info-label">Languages:</div>
            <div className="info-value">{formattedLanguages}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Country;
