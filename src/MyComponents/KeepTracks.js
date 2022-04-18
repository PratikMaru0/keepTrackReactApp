import React from 'react'
import KeepTrack from '../MyComponents/KeepTrack'
import './KeepTrack.css'

const KeepTracks = (props) => {

  let fontStyle = {
    "fontFamily": "Arial"
  };

  return (
    <div className='container'>
        <h3 className='text-center my-4 ' style={fontStyle} >* Keep-Tracks List *</h3>
        {
          props.keep_Tracks.length === 0 ? <h5 className='my-10 text-center box ' >No Tracks to Display. Please add one.</h5> :

            props.keep_Tracks.map((res) => {

              return <KeepTrack kTracks={res} key={res.sno} onDelete={props.onDelete} />
              
            })


        }
    </div>
  )
}

export default KeepTracks