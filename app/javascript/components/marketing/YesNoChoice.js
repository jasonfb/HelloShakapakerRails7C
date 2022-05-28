import React from 'react'


const YesNoChoice = (props) => {
  const choice_name = props.name;


  const dont_know = !props.showDontKnow ? "" :
    <>
      <label htmlFor={`${choice_name}_dont_know`} className={"btn btn-primary"}>
        <input name={choice_name}
               onChange={props.choose}
               type={"radio"}
               value={"Don't Know"}
               id={`${choice_name}_dont_know`} />
        &nbsp; Don't Know</label>
    </>
  return (
    <>

    <label htmlFor={`${choice_name}_yes`} className={"btn btn-primary"}>
      <input name={choice_name}
             onChange={props.choose}
             type={"radio"}
             value={"Yes"}
             id={`${choice_name}_yes`} />
      &nbsp; YES</label>
    &nbsp;
  <label htmlFor={`${choice_name}_no`} className={"btn btn-primary"}>
    <input name={choice_name}
           onChange={props.choose}
           type={"radio"}
           value={"No"}
           id={`${choice_name}_no`} />
    &nbsp; NO</label>
      {dont_know}
    </>



  )
}


export default YesNoChoice;


