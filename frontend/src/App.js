import { useState, React } from 'react'
import Country from './Country'
import axios from 'axios'


const App = () => {
  const [country, setCountry] = useState("")
  const [countryData, setCountryData] = useState({})
  const [showCountry, setShowCountry] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.get(`http://localhost:8000/search/${country}`)
      .then(res => {
        console.log(res.status)
        if (res.status === 200) {
          setCountryData(res.data[0])
          setShowCountry(true)
        } else {
          console.log("error")
          setShowCountry(false)
          console.log(res)
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={country}
          onChange={e => setCountry(e.target.value)} />
        <button type="submit"
        >Submit
        </button>
      </form>
      {showCountry ? <Country data={countryData} /> : null}
    </div>
  );
}

export default App;
