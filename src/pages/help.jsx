import React from 'react';
import '../styles/help.css';
import Selector from '../components/UI/Selector';
import FAQ from './FAQ';

function Help() {
    const HelpNav = () =>{
        <div className='helpTop'>
          <div className='helpContainer'>
            <h5>고객센터</h5>
            <div className='selectorContainer'>
              <Selector content='FAQ' />
              <Selector content='공지사항' />
              <Selector content='1대1 문의' />
            </div>
          </div>
        </div>
      }
  return (
    <div className='Main'>
      <HelpNav/>
      <div className='helpMain'>
        <div className='MainContainer'>
          <h5>FAQ</h5>
          <FAQ sort='계정' title='제목 내용' content='어쩌구 저쩌구' />
          <FAQ sort='계정' title='제목 내용' content='어쩌구 저쩌구' />
          <FAQ sort='매칭' title='제목 내용' content='어쩌구 저쩌구' />
          <FAQ sort='시설 예약' title='제목 내용' content='어쩌구 저쩌구' />
          <FAQ sort='레슨 예약' title='제목 내용' content='어쩌구 저쩌구' />
        </div>
      </div>
    </div>
  );
}

export default Help;
