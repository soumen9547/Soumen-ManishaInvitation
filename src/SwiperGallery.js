import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Correctly import the Navigation module

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

// Import your images
import jklGif from './assets/img/jkl.gif';
import invitation1 from './assets/img/Invitation1.png';
import cvbGif from './assets/img/cvb.gif';
import invitation2 from './assets/img/Invitation2.png';

const SwiperGallery = () => {
    return (
        <Container fluid className="position-relative">
            <Row noGutters>
                <div style={{ marginTop: '2em', width: '97%', minHeight: '150px' }}>
                    <Swiper
                        slidesPerView={1}  // Adjust for responsiveness (starts with 1 slide on mobile)
                        spaceBetween={10}  // Adjust space between slides
                        breakpoints={{
                            // Responsive breakpoints
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        navigation={true} // Enables navigation (next/prev arrows)
                        modules={[Navigation]} // Passes the Navigation module
                        loop={true} // Enables looping
                        style={{ backgroundImage: 'linear-gradient(62deg, rgb(142, 197, 252) 0%, rgb(224, 195, 252) 100%)' }}
                    >
                        <SwiperSlide style={{ borderRadius: '4px' }}>
                            <img src={jklGif} alt="Image 1" style={{ borderRadius: '4px', width: '100%' }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ borderRadius: '4px' }}>
                            <img src="https://media.licdn.com/dms/image/D5603AQEdwPccSivi2g/profile-displayphoto-shrink_200_200/0/1720927825885?e=2147483647&v=beta&t=FWlqA2rQ2p8RDw9DBJtmcT8SpmUmo6luOh-7qQrBtsQ"alt="Image 2" style={{ borderRadius: '4px', width: '100%' }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ borderRadius: '4px' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUVfCoj3JmYzzPDYh3Z5GU6VKaTmY9xvJ9E1CemdxKeJWosrHCkZqWVDkrVQPXbdKjNxc&usqp=CAU"alt="Image 3" style={{ borderRadius: '4px', width: '100%' }} />
                        </SwiperSlide>
                        <SwiperSlide style={{ borderRadius: '4px' }}>
                            <img src={cvbGif} alt="Image 4" style={{ borderRadius: '4px', width: '100%' }} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Row>
        </Container>
    );
};

export default SwiperGallery;
