import React from 'react'

export const LoadingSpinner = () => {
  return (
    <div class="d-flex justify-content-center" >
    <div class="spinner-border" style={{width:"5rem", height:"5rem", margin:"10%"}} role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  )
}
