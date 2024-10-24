import React from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import './InviteDetails.css';

const InviteDetails = () => {
  return (
    <Container className="text-center my-1" >
      <Row className="justify-content-center">
        <Col xs={12} md={7}>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{height: '10em', marginTop:'12em'}}
          >
            <div className="d-flex justify-content-between" id='heart'>
              {[...Array(4)].map((_, index) => (
                <svg
                  key={index}
                  width="50"
                  height="50"
                  viewBox="0 0 200 200"
                  className="mx-1"
                >
                  <g transform="translate(100 100)">
                    <path
                      transform="translate(-50 -50)"
                      fill="tomato"
                      d="M92.71,7.27L92.71,7.27c-9.71-9.69-25.46-9.69-35.18,0L50,14.79l-7.54-7.52
                      C32.75-2.42,17-2.42,7.29,7.27v0c-9.71,9.69-9.71,25.41,0,35.1L50,85l42.71-42.63C102.43,32.68,102.43,16.96,92.71,7.27z"
                    ></path>
                    <animateTransform
                      attributeName="transform"
                      type="scale"
                      values="1; 1.5; 1.25; 1.5; 1.5; 1;"
                      dur="1s"
                      repeatCount="indefinite"
                      additive="sum"
                    />
                  </g>
                </svg>
              ))}
            </div>
          </div>
        </Col>

        <Col xs={12} className="box1" style={{marginTop:'-10em'}}>
          <div  className='box1' style={{marginTop:'4em'}}>
            <a
              href="https://photos.app.goo.gl/Wn9PRK7FMpxBKF5s6"
              target="_blank"
              rel="noopener noreferrer"
              className="box">
              <Button variant="primary" size="lg" className="box2">
                👩‍❤️‍👨 See The Best Captured Moments 📷
              </Button>
            </a>
          </div>
        </Col>
      </Row>

      <div className="invitation-text text-center" style={{ padding: '1em', lineHeight: '1.7' }}>
        <p className="dance-med">
          ।। নিমন্ত্রণ বার্তা ।।
        </p>
        <p className="inv">
          <span className="title">যদিদং হৃদয়ং মম, ত্বাদিদং হৃদয়ং তব </span><br />
          <span className="message">
            বসন্তের রং লাগুক মনে প্রানে, চারদিক হয়ে উঠুক রঙিন। তারি মাঝে বেজে উঠুক মঙ্গলয়নি। উল্লুধুনিতে মুখরিত হয়ে উঠুক আকাশ বাতাস।
          </span>
        </p>
      </div>
    </Container>
  );
};

export default InviteDetails;
