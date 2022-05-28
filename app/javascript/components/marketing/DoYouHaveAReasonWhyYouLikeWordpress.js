import React, {useState} from 'react'
import YesNoChoice from "./YesNoChoice";
const DoYouHaveAReasonWhyYouLikeWordpress = (props) => {
  return (
    <>
      <h3>Do you have a reason why you like WordPress?</h3>
      <YesNoChoice choose={props.chooseReasonLikeWordpress} name={"reason_like_wordpress"} />
    </>
  )


}

export default DoYouHaveAReasonWhyYouLikeWordpress;