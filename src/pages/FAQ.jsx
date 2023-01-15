import React from 'react'

function FAQ(props) {
  return (
    <div className='faq'>
      <label>{props.sort}</label>
      <h5>Q. {props.title}</h5>
      <p>{props.content}</p>
    </div>
  )
}

export default FAQ
