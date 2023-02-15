import React from 'react'
import '../styles/home.css';

import {Container, Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';


import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTrouList from '../components/Featured-tours/FeaturedTrouList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';


const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
             <Col lg='6'>
                <div className='hero__content'>
                   <div className='hero__subtitle d-flex align-items-center '>
                      <Subtitle subtitle={'Know Before You Go'}/>
                       <img src={worldImg} alt="" />
                   </div>
                   <h1>여행은 <span className='highlight'> 추억을 </span>만드는 문을 열어준다  
                    
                   </h1>
                   <p>
                       몸과 마음을 행복하게 해주는 여행을 떠나 보세요.
                   </p>
                  
                </div>
             </Col>


             <Col lg='2'>
                <div className="hero__img-box">
                   <img src={heroImg} alt="" />                   
                </div>
             </Col>
             <Col lg='2'>
                <div className="hero__img-box mt-4">
                   <video src={heroVideo} alt="" controls />                   
                </div>
             </Col>
             <Col lg='2'>
                <div className="hero__img-box mt-5">
                   <img src={heroImg02} alt="" />                   
                </div>
             </Col>
             <SearchBar />
          </Row>
        </Container>        
      </section>
      <section>
         <Container>
            <Row>
               <Col lg='3'>
                  <h5 className='services__subtitle'>What we serve</h5>
                  <h2 className='services__title'>We offer our best services</h2>
               </Col>
               <ServiceList/>
            </Row>
         </Container>
      </section>
      <section>
         <Container>
            <Row>
               <Col lg="12" className='mb-5'>
                  <Subtitle subtitle={"Explore"} />
                  <h2 className='featured__tour-title'>Our featured tours</h2>
               </Col>
               <FeaturedTrouList/>
            </Row>
         </Container>
      </section>

      <section>
         <Container>
            <Row>
               <Col lg='6'>
                  <div className="experience__content">
                     <Subtitle subtitle={'Experience'} />
                     <h2>With our all experience <br /> we will serve you</h2>
                     <p>
                        필요한문구쓰기

                     </p>
                  </div>
                  <div className='counter__wrapper d-flex align-items-center gap-5'>
                       <div className="counter__box">
                          <span>12k+</span>
                          <h6>Successfull trip</h6>
                       </div>
                       <div className="counter__box">
                          <span>2k+</span>
                          <h6>Regular clients</h6>
                       </div>
                       <div className="counter__box">
                          <span>5</span>
                          <h6>Years experience</h6>
                       </div>
                  </div>
               </Col>
               <Col lg='6'>
                  <div className="experience__img">
                     <img src={experienceImg} alt=""/>
                  </div>
               </Col>
            </Row>
         </Container>         
      </section>
         <section>
            <Container>
               <Row>
                  <Col lg='12'>
                     <Subtitle subtilte={'Gallerry'} />
                     <h2 className="gallery__title">Visit our customers tour</h2>
                  </Col>
                  <Col lg='12'>
                     <MasonryImagesGallery />
                  </Col>
               </Row>
            </Container>
         </section>
         <section>
            <Container>
               <Row>
                  <Col lg='12'>
                        <Subtitle subtitle={'Fans Love'} />
                        <h2 className="testimonial__title">What our fans say about us</h2>
                  </Col>  
                  <Col lg='12'>
                     <Testimonials />
                  </Col>                
               </Row>
            </Container>
         </section>
         <Newsletter/>

    </>
  )
}

export default Home;