const express = require("express");
const app = express();
const cors = require('cors');
const port = 8000;
const axios = require('axios')

// Allows cors
app.use(cors())

// Main API endpoint. Takes a country name as a GET parameter and returns
// a json object containing information about the country.
app.get("/search/:country", (req, res) => {
  const country = req.params.country
  const url = `https://restcountries.com/v3.1/name/${country}`

  axios.get(url)
    .then(response => {
      res.status(200).json(response.data)
    })
    .catch(error => {
      console.log(error)
      res.status(404).json(error)
    })
});

// 404 page
app.get("*", (req, res) => {
  res.status(404).send("Page not found")
})


app.listen(port, () => console.log(`App listening on port ${port}`))
