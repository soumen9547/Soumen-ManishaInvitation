import React from 'react';
import Header from './Header';
import InviteDetails from './InviteDetails';
import SwiperGallery from './SwiperGallery';
import Actions from './Actions.js';
import ggg from './assets/img/ggg.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTwitter } from '@fortawesome/free-brands-svg-icons'; // Uncomment if using Twitter icon
import './App.css';
import CountdownTimer from './CountdownTimer.js';

function App() {
  // Define the pauseAudio function if needed
  const pauseAudio = () => {
    // Pause audio logic here
  };

  return (
    <div className="App" >
      <Header />
      <InviteDetails />
      <Actions />
      <SwiperGallery />
      <Container className="text-center">
        <Row>
          <Col className="mt-4">
            <p className="happiness">
              Join us in our happiness!<br />
              <a href="https://twitter.com/sarcastic_sark" target="_blank" rel="noopener noreferrer" className="twitter">
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="tile__img">
              <img className="tile__img" src={ggg} alt="Wedding Invitation" style={{ maxWidth: '50%', height: 'auto' }} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footer" style={{ fontSize: '1.1em', color: '#874562', fontWeight: '500' }}>
              With the divine grace of the almighty, I cordially invite you and your family to my wedding.
              I'd eagerly await your kind presence on the auspicious occasion of my family.
            </p>
          </Col>
        </Row>
      </Container>
      <CountdownTimer />
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <div className="actions d-flex justify-content-center">
              <a href="#top" onClick={pauseAudio} style={{ textDecoration: 'none', width: '7em' }}>
                <div className="venue text-center" style={{ height: '2em' }}>
                  <b>^ TOP ^</b>
                </div>
              </a>
            </div>
            <br />
            <div className="footer" style={{ minHeight: '40px', fontSize: '21px', fontWeight: '500' }}>
              Crafted with lots of love ❤️ by Soumen
            </div>
          </Col>
        </Row>
      </Container>
     
    </div>
  );
}

export default App;
