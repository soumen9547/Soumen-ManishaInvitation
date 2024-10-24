import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { FaWhatsapp } from 'react-icons/fa'; // Import FaWhatsapp
import './index.css';

const Actions = () => {
  return (
    <div style={{ backgroundImage: 'linear-gradient(62deg, rgb(142, 197, 252) 0%, rgb(224, 195, 252) 100%)' }}>
      <Container className="text-center py-2">
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <a href="./assets/SI.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="venue">DOWNLOAD INVITATION CARD</div>
            </a>
          </Col>

          <Col xs={12} md={6} className="mb-3">
            <a
              href="https://www.paperlesspost.com/events/42022796-fa32f810/replies/628828561-574f1d08"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}>
              <div className="venue">OPEN ANIMATED INVITATION CARD</div>
            </a>
          </Col>
        </Row>
      </Container>

      <Container className="text-center py-2">
        <Row>
          <Col>
            <p style={{ color: '#674ea7', fontSize: '1.4em' }}>
              Can't wait to celebrate the auspicious moment of our family with you!
              <br />
              Ping me for queries: +91 8640805196
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=919013239430&utm_source=Messaging&utm_medium=Whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="WhatsApp"
            >

            </a>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={12}>
            <p style={{ color: 'black',textAlign: 'center',fontSize:'20px' }}>How do I get there?</p>
          </Col>
          <Col md={12} className="text-center">
            <a href="https://g.page/Mishttenresort" target="_blank">
              <div style={{ background: '#674ea7',borderRadius: '10px',padding: '10px',display: 'inline-block',cursor: 'pointer',color:'white' }}>
                SEE THE VENUE
              </div>
            </a>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Actions;
