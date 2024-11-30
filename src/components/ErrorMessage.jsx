import React from 'react'

const ErrorMessage = ({serverData}) => {
  return (
    <center className='error-msg'>
      <div>


     <h1> NO POSTS AVAILABLE</h1>

      <button type="button" onClick={serverData} className="btn btn-outline-primary">Fetch Posts from SERVER</button>
      </div>
    </center>
  )
}

export default ErrorMessage
