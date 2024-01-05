import 'bootstrap/dist/css/bootstrap.min.css';
import { inject } from '@vercel/analytics';
import React, { useState } from 'react';
import YoutubeVideo from './YoutubeVideo'
import SideBar from "./SideBar";
import { Container, Col, Row } from 'react-bootstrap';

const App = () => {
  // Injects vercel's analytics
  inject();

  const kataList = [
    // Katas Kyokushin-kan
    {name: "Taikyoku Sono Ichi", id: "lerUASrjDds"},
    {name: "Taikyoku Sono Ni", id: "hwja_1afW5k"},
    {name: "Taikyoku Sono San", id: "cgZeVVigUx4"},
    {name: "Pinan Sono Ichi", id: "JW3ZBI6N0UU"},
    {name: "Pinan Sono Ni", id: "fFRMLDmSJbA"},
    {name: "Pinan Sono San", id: "eG5ytZRBwZA"},
    {name: "Pinan Sono Yon", id: "EG_5nJS0HYE"},
    {name: "Pinan Sono Go", id: "ZEFDtQOkvsI"},
    {name: "Jyuji No Kata", id: "nDILL_KCejA"},
    {name: "Sanchin No Kata", id: "v5r9HKvsxZI"},
    {name: "Jyu No Kata", id: "Scx7DyNLlAM"},
    {name: "Yantsu", id: "pP_KNZ-AQ7g"},
    {name: "Gekisai Sho", id: "vUWC5K10JY4"},
    {name: "Gekisai Dai", id: "0xgszKmIKvs"},
    {name: "Saiha", id: "pyuA5LWOi4Q"},
    {name: "Tensho", id: "789DKLtt0VQ"},
    {name: "Seienchin", id: "qKbFQ7TACUU"},
    {name: "Tsuki No Kata", id: "wcieC2HfnLY"},
    {name: "Oshiro No Kon", id: "79IaZLCohUU"},
    {name: "Sushiho", id: "OBndew8_G0M"},
    {name: "Kanku", id: "IIcJm_TRO0s"},
    {name: "Terukawa No Tonfa", id: "Oe6ot8senxg"},
    {name: "Garyu", id: "oQKGx1UDUb4"},
    {name: "Seipai", id: "wVdzUYfSSi0"},
    {name: "Tawada No Saï Sho", id: "Me8Acm2HI1o"},
    {name: "Shushi No Kon", id: "chhXWyvQ6xE"},

    // Bonkai des katas Kyokusin-kan
    {name: "Bonkai - Tawada No Saï Sho", id: "Ita4FQ6h494"},
    {name: "Bonkai - Seienchin", id: "KgIN5P2c9gA"},
    {name: "Bonkai - Sushiho", id: "5M6UoN-z1d0"},
    {name: "Bonkai - Kanku", id: "w5UqJNsCQMI"},
    {name: "Bonkai - Seipai", id: "e-cYY6s6Hq0"},
    {name: "Bonkai - Terukana No Tonfa", id: "U1G8WBggpaI"},
    {name: "Bonkai - Garyu", id: "4LdKeEzZSi8"},
  ]

  const [sidebarOpen, setSideBarOpen] = useState(false);

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  const addVideos = () => {
    return kataList.map(kata => 
      <Col id={kata.name} xl="3" lg="4" md="6" key={kata.name} className="video">
        <h2>{kata.name}</h2>
        <YoutubeVideo videoId={kata.id} title={kata.name} />
      </Col>
    );
  }

  return (
    <>
      <div className='App d-flex flex-column align-items-center'>
        <h1 className='p-4 mb-5 w-100'>Katas Kyokushin-Kan</h1>
        <SideBar kataList={kataList} isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
        <Container> 
          <Row>
            { addVideos() }
          </Row>
        </Container>
      </div>
      <div className="p-2" style={{'color':'#ccc','backgroundColor':'#1f1f1f','marginTop':'auto','textAlign':'center'}} >
        @Copyrights 2023 - {new Date().getFullYear()} Adam Mihajlovic. All rights reserved.
      </div>
    </>
  );
}

export default App;
