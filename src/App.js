import 'bootstrap/dist/css/bootstrap.min.css';
import { inject } from '@vercel/analytics';
import React from 'react';
import YouTube from 'react-youtube'
import { Container, Col, Row } from 'react-bootstrap';

const App = () => {
  // Injects vercel's analytics
  inject();

  const kataList = [
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
  ]

  const showVideos = () => {
    return(
      <Container>
        <Row>
          {kataList.map(kata => {
            return(
              <Col lg="4" key={kata.name} className="video">
                <h2 style={{color: "#fff", textAlign: "center"}}>{kata.name}</h2>
                <YouTube videoId={kata.id} title={kata.name} />
              </Col>
              )
          })}
        </Row>
      </Container>
    )
  }

  return (
    <>
      <div className='App d-flex flex-column align-items-center'>
        <h1 className='mt-5 mb-5' style={{'fontSize':'44px', 'color':'#ff0000'}}>Katas Kyokushin-Kan</h1>
        { showVideos() }
      </div>

      <div className="p-2" style={{'color':'#ccc','backgroundColor':'#1f1f1f','marginTop':'auto','textAlign':'center'}} >
        @Copyrights 2023 - {new Date().getFullYear()} Adam Mihajlovic. All rights reserved.
      </div>
    </>
  );
}

export default App;
