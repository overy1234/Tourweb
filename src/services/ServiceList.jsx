import React from 'react'
import ServiceCard from "./ServiceCard";

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';
import { Col } from 'reactstrap';

const servicesData =[
    {
        imgUrl: weatherImg,
        title: "날씨서비스",
        desc: "여행가기 좋은 날씨를 파악합니다."
    },
    {
        imgUrl: guideImg,
        title: "가이드 연결",
        desc: "여행에 필요한 가이드를 연결합니다."
    },
    {
        imgUrl: customizationImg,
        title: "자유롭게 일정을 설정",
        desc: "고객이  일정을 설정할 수 있습니다."
    }
]



const ServiceList = () => {
  return (
    <>
        {servicesData.map((item,index)=>(
            <Col lg="3" key={index}>
                <ServiceCard item ={item} />
            </Col>   
        ))}
    </>
  )
}

export default ServiceList;