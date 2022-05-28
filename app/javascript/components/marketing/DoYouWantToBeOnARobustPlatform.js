import React from 'react'
import YesNoChoice from "./YesNoChoice";


const DoYouWantToBeOnARobustPlatform = (props) => {
  return (
    <>
      <h3>Do You want to be on a <strong>robust</strong> e-commerce platform?</h3>
      <YesNoChoice
        name={"do_you_want_to_be_on_a_robust_ecomm_platform"}
        choose={props.chooseDoYouWantToBeOnARobustPlatform} />

    </>
  )

}


export default DoYouWantToBeOnARobustPlatform;