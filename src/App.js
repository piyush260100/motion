import './App.css';
import React from 'react';
import Row from "../src/Components/Row/Row";
import requests from './request';
import Banner from "../src/Components/Banner/Banner";
import Navbar from './Components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
     
      <Navbar></Navbar>

      <Banner/>
      <Row title="MOTION ORIGINALS" fetchURL={requests.fetchMotionOriginals} isLargeRow />
      <Row title ="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title ="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title ="Action Movies" fetchURL={requests.fetchActionMoveis}/>
      <Row title ="Comedy Movies" fetchURL={requests.fetchComedyMoveis}/>
      <Row title ="Horror Movies" fetchURL={requests.fetchHorrorMoveis}/>
      <Row title ="Romantic Movies" fetchURL={requests.fetchRomanticMoveis}/>
      <Row title ="Documentaries" fetchURL={requests.fetchDocumentaries}/>
     
    </div>
  );
}

export default App;
