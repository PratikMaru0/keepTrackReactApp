import './App.css';
import React, { useState, useEffect } from 'react';
import Footer from './MyComponents/Footer';
import Header from './MyComponents/Header';
import KeepTracks from './MyComponents/KeepTracks';
import AddTrack from './MyComponents/AddTrack';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import About from './MyComponents/About';

function App() {

  let initKeepTracks;

  if (localStorage.getItem("keepTracks") === null) {
    initKeepTracks = [];
  }
  else {
    initKeepTracks = JSON.parse(localStorage.getItem("keepTracks"));
  }

  // Delete Function (Yeh really Awesome function hai maja agaya)
  const onDelete = (kTrack) => {
    // console.log("Im onDelete of kTracks",kTrack);
    setKTracks(keepTracks.filter((e) => {
      return e !== kTrack;
    }));

    // we'll also be saving our track to our localstorage so that it don't wipe out when we refresh or come back later
    localStorage.setItem('keepTracks', JSON.stringify(keepTracks));
  }

  const addTrack = (title, desc, amount, refund) => {
    let sno;
    if (keepTracks.length === 0) {
      sno = 0;
    }
    else {
      sno = keepTracks[keepTracks.length - 1].sno + 1;
      console.log("Im adding this Track data", title, desc, amount, refund, sno);
    }
    const myTrack = {
      sno: sno,
      title: title,
      desc: desc,
      amount: amount,
      refund: refund
    }
    if (!title || !desc || !amount || !refund) {
      // alert("Please enter value in all respective field");
    }
    else {
      setKTracks([...keepTracks, myTrack]);
    }

  }

  const [keepTracks, setKTracks] = useState(initKeepTracks);

  useEffect(() => {
    localStorage.setItem('keepTracks', JSON.stringify(keepTracks));
  }, [keepTracks])


  return (
    <Router>
      <Header title="Keep-Track" />

    

      <Routes>
        <Route exact path="/" element={<>
              <AddTrack addTrack={addTrack} />
              {/* <Header /> */}
              <KeepTracks keep_Tracks={keepTracks} onDelete={onDelete} />
            </>} >
        </Route>
        <Route path="/about" element={<About/>}>
          {/* <About /> */}
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;