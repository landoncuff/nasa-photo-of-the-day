import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PictureDate from "./components/Date";
import NasaPicture from "./components/Picture";
import PictureTitle from "./components/Title";

function App() {
// getting state for nasa data
  const [nasaData, setNasaData] = useState([])
  // setting state for rendering data
  const [dataStatus, setDataStatus] = useState('default')

  useEffect(() =>{

    async function getNasaData() {
      const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=aKsNfmN1gPy0J1ogQP6MHykpjFfrm5lwiKP1wdhy")

      setNasaData(response.data)
    }

    // can also do:
   /* function data(id) =>{
      axios 
        .get('api')
        .then((res) => setNasaData(res.data)) 
        .catch((err) => console.log(err.response))
    }*/
    getNasaData();

  }, [])

  useEffect(() =>{
    console.log(nasaData)
  })

  if(dataStatus === 'loading'){
    return (
      <div>
        <h1>Page is loading</h1>
      </div>
    )
  }


  if(dataStatus === 'default'){
  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <PictureTitle props={nasaData}/>
      <PictureDate picData={nasaData}/>
      <NasaPicture prop={nasaData}/>
    </div>
  );
  }
}

export default App;


// token

//*  aKsNfmN1gPy0J1ogQP6MHykpjFfrm5lwiKP1wdhy