import React from 'react'
import { Container, Row } from 'reactstrap'
import TimeType from '../components/UI/TimeType';
import '../styles/lesson_detail_lay.css'

const LessonDetails = () => {
  return (
    <Container>
    <div>
      <div>
        <div style={{margin: '10px 0 3px 0'}}>경기도 부천시 어쩌구 주소</div>
        <div style={{marginBottom: '15px'}}>길찾기 &gt;</div>
        <div style={{fontSize: 'small'}}>날짜</div>
        <h3 style={{marginBottom: '15px'}}>2022.12.30(수)</h3>
        <div style={{fontSize: 'small', marginBottom: '7px'}}>시간</div>
        <TimeType time='09:00' color='gold'/>
        <TimeType time='10:00' color='aquamarine'/>
        <TimeType time='11:00' color='grey'/>
        <br/>
        <TimeType time='12:00' color='grey'/>
        <TimeType time='13:00' color='grey'/>
        <div><button className="join-btn">예약하기</button></div>
    </div>
    </div>
    </Container>
  );
}

export default LessonDetails
