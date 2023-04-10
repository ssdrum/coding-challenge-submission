import React from "react";

const Country = ({ data }) => {
  return (
    <div id="country-container">
      {data[0].name.official}
    </div>
  )
};

export default Country;
