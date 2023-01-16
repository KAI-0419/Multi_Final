import React from 'react'
import HelpNav from '../components/HelpNav'
import '../styles/help.css';
import FAQ from './FAQ';

function Notice() {
  return (
    <div className='Main'>
        <HelpNav/>
      <div className='noticeMain'>
        <div className='MainContainer'>
          <h5>1대1 문의</h5>
         
        </div>
      </div>
    </div>
  )
}

export default Notice
