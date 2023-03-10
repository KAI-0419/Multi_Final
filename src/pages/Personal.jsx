import React from 'react'
import HelpNav from '../components/HelpNav'
import '../styles/help.css';
import PersonalMain from './PersonalMain';
import '../styles/Personal.css'
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

function Notice() {
  return (
    <div className='Main'>
        <HelpNav/>
      <div className='PersonalMain'>
        <div className='PersonalContainer'>
          <h5>1대1 문의</h5>
          <div className='MainWrapper'>
            <button className='WriteBtn' type='button'>글쓰기</button>
          <div className='MainWrap'>
            <PersonalMain TitleQs='관리자만 볼 수 있습니다.' NickName='rkd****8' date='2023.11.15'/>
            <PersonalMain TitleQs='관리자만 볼 수 있습니다.' NickName='rkd***8' date='2023.01.13'/>
            <PersonalMain TitleQs='관리자만 볼 수 있습니다.' NickName='amm***' date='2023.01.15'/>
            <PersonalMain TitleQs='관리자만 볼 수 있습니다.' NickName='asd***' date='2022.11.22'/>
            <PersonalMain TitleQs='관리자만 볼 수 있습니다.' NickName='asd***2' date='2022.08.15'/>
            <PersonalMain TitleQs='관리자만 볼 수 있습니다.' NickName='kkn23***' date='2021.04.19'/>
            <PersonalMain TitleQs='관리자만 볼 수 있습니다.' NickName='sbbm**7*' date='2021.03.24'/>
            <PersonalMain TitleQs='관리자만 볼 수 있습니다.' NickName='asfvb***' date='2020.02.11'/>
            <PersonalMain TitleQs='관리자만 볼 수 있습니다.' NickName='kjft***' date='2019.12.31'/>
          </div>
          </div>

          <nav className='pageNavigator' aria-label="Page navigation example">
                <Pagination>
                  <PaginationItem>
                    <PaginationLink className='pageSingle' style={{borderRadius: '20px', border: '2px solid #6bd098', color:'#6bd098'}}
                      aria-label="Previous"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i aria-hidden={true} className="fa fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className='pageSingle' style={{borderRadius: '20px', border: '2px solid #6bd098', color:'#6bd098'}}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className='pageSingle' style={{borderRadius: '20px', border: '2px solid #6bd098', color:'#6bd098'}}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className='pageSingle' style={{borderRadius: '20px', border: '2px solid #6bd098', color:'#6bd098'}}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className='pageSingle' style={{borderRadius: '20px', border: '2px solid #6bd098', color:'#6bd098'}}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className='pageSingle' style={{borderRadius: '20px', border: '2px solid #6bd098', color:'#6bd098'}}
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      5
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink className='pageSingle' style={{borderRadius: '20px', border: '2px solid #6bd098', color:'#6bd098'}}
                      aria-label="Next"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i aria-hidden={true} className="fa fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>

        </div>
      </div>
    </div>
  )
}

export default Notice
