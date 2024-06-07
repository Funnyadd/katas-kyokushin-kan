import 'bootstrap/dist/css/bootstrap.min.css';
import { inject } from '@vercel/analytics';
import React, { useState } from 'react';
import YoutubeVideo from './components/YoutubeVideo'
import FacebookVideo from './components/FacebookVideo';
import SideBar from "./components/SideBar";
import { Container, Col, Row } from 'react-bootstrap';

const App = () => {
  // Injects vercel's analytics
  inject();

  const kataList = [
    {name: "Taikyoku Sono Ichi", id: "lerUASrjDds", kata: true},
    {name: "Taikyoku Sono Ni", id: "hwja_1afW5k", kata: true},
    {name: "Taikyoku Sono San", id: "cgZeVVigUx4", kata: true},
    // {name: "Pinan Sono Ichi", id: "JW3ZBI6N0UU", kata: true},
    {name: "Pinan Sono Ichi", id: "syTnOx2q-y", kata: true, bonkai: true, isFacebookVideo: true},
    // {name: "Pinan Sono Ni", id: "fFRMLDmSJbA", kata: true},
    {name: "Pinan Sono Ni", id: "syTmNMsWAj", kata: true, bonkai: true, isFacebookVideo: true},
    // {name: "Pinan Sono San", id: "eG5ytZRBwZA", kata: true},
    {name: "Pinan Sono San", id: "syTj1UjxlW", kata: true, bonkai: true, isFacebookVideo: true},
    // {name: "Pinan Sono Yon", id: "EG_5nJS0HYE", kata: true},
    {name: "Pinan Sono Yon", id: "sySJ1LoVtm", kata: true, bonkai: true, isFacebookVideo: true},
    {name: "Pinan Sono Go", id: "ZEFDtQOkvsI", kata: true},
    {name: "Pinan Sono Go", id: "vksYgmtLIOQ", bonkai: true},
    {name: "Jyuji No Kata", id: "nDILL_KCejA", kata: true},
    {name: "Sanchin No Kata", id: "v5r9HKvsxZI", kata: true},
    {name: "Jyu No Kata", id: "Scx7DyNLlAM", kata: true},
    {name: "Yantsu", id: "pP_KNZ-AQ7g", kata: true},
    {name: "Yantsu", id: "SmwOLV3e5T0", bonkai: true},
    {name: "Gekisai Sho", id: "vUWC5K10JY4", kata: true},
    {name: "Geiksai Sho", id: "tOvPRb9XdgQ", bonkai: true},
    {name: "Gekisai Dai", id: "0xgszKmIKvs", kata: true},
    {name: "Geiksai Dai", id: "PBbkgAMK9ck", bonkai: true},
    {name: "Saiha", id: "pyuA5LWOi4Q", kata: true},
    {name: "Tensho", id: "789DKLtt0VQ", kata: true},
    {name: "Seienchin", id: "KgIN5P2c9gA", kata: true, bonkai: true},
    // {name: "Seienchin", id: "qKbFQ7TACUU", kata: true},
    // {name: "Seienchin", id: "KgIN5P2c9gA", bonkai: true},
    {name: "Tsuki No Kata", id: "wcieC2HfnLY", kata: true},
    {name: "Oshiro No Kon", id: "79IaZLCohUU", kata: true},
    {name: "Sushiho", id: "OBndew8_G0M", kata: true},
    {name: "Sushiho", id: "5M6UoN-z1d0", bonkai: true},
    {name: "Kanku", id: "IIcJm_TRO0s", kata: true},
    {name: "Kanku", id: "w5UqJNsCQMI", bonkai: true},
    {name: "Terukawa No Tonfa", id: "Oe6ot8senxg", kata: true},
    {name: "Terukana No Tonfa", id: "U1G8WBggpaI", bonkai: true},
    {name: "Garyu", id: "oQKGx1UDUb4", kata: true},
    {name: "Garyu", id: "4LdKeEzZSi8", bonkai: true},
    {name: "Seipai", id: "wVdzUYfSSi0", kata: true},
    {name: "Seipai", id: "e-cYY6s6Hq0", bonkai: true},
    {name: "Tawada No Saï Sho", id: "Me8Acm2HI1o", kata: true},
    {name: "Tawada No Saï Sho", id: "Ita4FQ6h494", bonkai: true},
    {name: "Shushi No Kon", id: "chhXWyvQ6xE", kata: true},
  ]

  const [sidebarOpen, setSideBarOpen] = useState(false);

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  }

  const getTitle = (kata) => {
    if (kata.kata & kata.bonkai) {
      return (kata.name + " | kata + bonkai")
    }
    else if (kata.kata) {
      return (kata.name + " | kata")
    }
    else if (kata.bonkai) {
      return (kata.name + " | bonkai")
    }
    else {
      console.error(`kata ${kata.name} missing kata or bonkai instruction`)
    }
  }

  const addVideos = () => {
    return kataList.map((kata, index) => 
      <Col id={getTitle(kata)} xl="3" lg="4" md="6" key={index} className="video">
        <h2 dangerouslySetInnerHTML={{__html: getTitle(kata).replace(" | ", "<br/>")}}></h2>
        {
          kata.isFacebookVideo
          ? <FacebookVideo videoId={kata.id} title={getTitle(kata)} />
          : <YoutubeVideo videoId={kata.id} title={getTitle(kata)} />
        }
      </Col>
    )
  }

  return (
    <>
      <div className='App d-flex flex-column align-items-center'>
        <h1 className='p-4 mb-5 w-100'>Katas Kyokushin-Kan</h1>
        <SideBar kataList={kataList} isOpen={sidebarOpen} getTitle={getTitle} toggleSidebar={handleViewSidebar} />
        <Container> 
          <Row>
            { addVideos() }
          </Row>
        </Container>
      </div>
      <div className="p-2" style={{'color':'#ccc','backgroundColor':'#1f1f1f','marginTop':'auto','textAlign':'center'}} >
        © 2023 - {new Date().getFullYear()} Adam Mihajlovic. All rights reserved.
      </div>
    </>
  );
}

export default App;
