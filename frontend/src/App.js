import React, { useState } from 'react'
import Spinner from './Spinner'
import Country from './Country'

const App = () => {
  const [inputText, setInputText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [countryData, setCountryData] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault() // Avoids re-rendering on submit
    setIsLoading(true)

    try {
      const response = await fetch(`http://127.0.0.1:8000/search/${inputText}`)
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`)
      }
      const data = await response.json()
      setCountryData(data)
      setIsLoading(false)
      setInputText("")
    } catch (error) {
      setCountryData(null)
      setIsLoading(false)
      setInputText("")
      alert("Country not found")
    }
  }

  return (
    <main>
      <form onSubmit={e => handleSubmit(e)}>
        <div id='input-box'>
          <input type="text"
            placeholder={'Search a country...'}
            value={inputText}
            onChange={e => setInputText(e.target.value)}
          />
          <button type='submit'>Search</button>
        </div>
      </form>
      {isLoading && <Spinner />}
      {countryData && <Country data={countryData} />}
    </main >
  )
}

export default App;
