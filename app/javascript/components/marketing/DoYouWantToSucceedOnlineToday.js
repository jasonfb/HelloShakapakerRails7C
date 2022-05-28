import React from 'react'
import YesNoChoice from "./YesNoChoice";

const DoYouWantToSucceedOnlineToday = (props) => {
  return (
    <>
      <h3>Do you want to succeed online today?</h3>
        <YesNoChoice choose={props.chooseDoYouWantToSucceed} name={"do_you_want_to_succeed_online_today"} />

    </>
  )
}


export default DoYouWantToSucceedOnlineToday;