import React from 'react'

const Loading = () => {
  return (
    <div className="d-flex spin align-items-center  justify-content-center">
  <div className="spinner-border" style={{height : "5rem",width : "5rem"}} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
  )
}

export default Loading
