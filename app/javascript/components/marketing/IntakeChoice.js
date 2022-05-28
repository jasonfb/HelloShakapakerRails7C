import React from 'react'



const IntakeChoice = (props) => {


  const invisible_form_element = (props.toggled ? <input type='hidden' name={'chosen'} value={ props.name}   /> : "")
  return (

    <div
      data-intake-choice-name={props.name}
      data-intake-choice-id={props.id}
         className={"intake-choice" + (props.toggled ? ' toggled' : '')}
         onClick={props.toggleIntakeChoice}>


      {props.name}
      {invisible_form_element}
    </div>)
}


export default IntakeChoice