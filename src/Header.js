import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import left from './assets/img/left.png';
import right from './assets/img/right.png';
import './Header.css';

import leftside from './assets/img/couple-costume.png';

const Header = () => { 
    return (
        <Container fluid className="position-relative p-0 m-0">
            {/* Left Image */}
            <Row noGutters className="m-0">
                <Col xs={6} className="d-flex justify-content-start p-0 position-relative">
                    {/* Background Left Image */}
                    <Image src={leftside} className="img-fluid position-absolute" style={{ left: '0', top: '150px', zIndex: 1 }} />
                    <Image src={left} rounded alt="image-top-left" className="decoration-left img-fluid py-0" />
                </Col>

                {/* Center Title */}
                <Col xs={12} className="text-center position-absolute">
                    <div className="wrap">
                        <div className="title">
                            <div className="title text-center">
                                <div className="rounded-heading"><b>"শ্রী প্রজাপতি নমঃ"</b></div>
                                <h1>Soumen</h1>
                                <h2>❤️ AND ❤️</h2>
                                <h1>Manisha</h1>
                                <h3>Are getting married</h3>
                                
                                <p style={{display:'inline-block',width:'100%',textAlign:'center' }}>on <div className="date" style={{ display: 'inline' }}>14 December 2024</div>, At <div className="place" style={{ display: 'inline' }}>ABC Resort</div> Bankura, WB</p>
                              
                            </div>
                        </div>
                    </div>
                </Col>

                {/* Right Image */}
                <Col xs={6} className="d-flex justify-content-end p-0 position-relative">
                    {/* Background Right Image */}
                    <Image src={leftside} className="img-fluid position-absolute" style={{ right: '0', top: '150px', zIndex: 1 }} />
                    <Image src={right} rounded alt="image-top-right" className="decoration-right img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
