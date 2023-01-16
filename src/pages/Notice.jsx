import React from 'react'
import HelpNav from '../components/HelpNav'
import '../styles/notice.css'

function Notice() {
  return (
    <div className='Main'>
        <HelpNav/>
      <div className='noticeMain'>
        <div className='MainContainer'>
          <h5>공지사항</h5>
          <div className='notice'>
            <h5>공지 알립니다!</h5>
            <div>2023.01.16</div>
            <p>어쩌구 저쩌구</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notice
