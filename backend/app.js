const express = require("express");
const app = express();
const cors = require('cors');
const port = 8000;
const axios = require('axios')

// Allow cors
app.use(cors())

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
  res.send("Page not found", 404)
})


app.listen(port, () => console.log(`App listening on port ${port}`))
