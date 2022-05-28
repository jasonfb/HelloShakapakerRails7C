import React from 'react'


const NextButton = (props) => {



  return (
    <>
      <br />
      <br />
      <br />
      <a style={{visibility: props.visible===false ? "hidden" : "visible"}}
         data-aos="zoom-in"
         data-target="#signupFormModal"
         data-toggle="modal"
         href="/book-calendly"
         className={"btn btn-primary"}>
        Get Started &raquo;
      </a>
      <br />
    </>
  )
}

export default NextButton;