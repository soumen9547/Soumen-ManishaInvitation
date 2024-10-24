import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CountdownTimer.css';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({});

    // Set the countdown date
    const countDownDate = new Date('December 14, 2024 00:00:00').getTime();

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({
                    days, hours, minutes, seconds
                });
            } else {
                clearInterval(interval);
                setTimeLeft(null);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return (
        <Container fluid className="countdown-container text-center">
            {timeLeft ? (
                <Row className="justify-content-center">
                    <Col xs={6} md={2} className="block">
                        <div className="number">{timeLeft.days}</div>
                        <div className="label">Days</div>
                    </Col>
                    <Col xs={6} md={2} className="block">
                        <div className="number">{timeLeft.hours}</div>
                        <div className="label">Hours</div>
                    </Col>
                    <Col xs={6} md={2} className="block">
                        <div className="number">{timeLeft.minutes}</div>
                        <div className="label">Minutes</div>
                    </Col>
                    <Col xs={6} md={2} className="block">
                        <div className="number">{timeLeft.seconds}</div>
                        <div className="label">Seconds</div>
                    </Col>
                </Row>
            ) : (
                <div className="blessing-message">Bless the married couple for a happy life!</div>
            )}
        </Container>
    );
};

export default CountdownTimer;
