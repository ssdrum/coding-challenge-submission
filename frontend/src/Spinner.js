import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className='spinner-container'>
      <ThreeDots
        height={80}
        color={"#fff"}
        visible={true}
      />
    </div>
  )
}

export default Spinner
