import React from 'react'
import './KeepTrack.css'
const KeepTrack = ({ kTracks, onDelete }) => {

  return (
    <div className='box' >
      <h3>{kTracks.title}</h3>
      <h5 className='form-text'>{kTracks.desc}</h5><br/>
      <p style = {{"color" : "red"}}>Amount Paid:- {kTracks.amount}</p>
      <p style={{"color" : "green"}}>Get Refund :- {kTracks.refund}</p>
      <button className="btn btn-sm btn-dark" onClick={() => { onDelete(kTracks) }} >Delete Track</button>
    </div>
  )
}

export default KeepTrack
