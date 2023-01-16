import React from 'react';
import '../styles/help.css';
import FAQ from './FAQ';
import HelpNav from '../components/HelpNav';

function Help() {
    
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
