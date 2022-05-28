import React, {useState} from 'react'
import YesNoChoice from "./YesNoChoice";
import GetInTouchButton from "./GetInTouchButton";


const WixOrSquareSpace = (props) => {
  const [doYouWantCustomSoftwareDevelopment, setDoYouWantCustomSoftwareDevelopment] = useState(null);





  const result_text = (doYouWantCustomSoftwareDevelopment === null ?  "" :
      (doYouWantCustomSoftwareDevelopment === "Yes" ?
        "Use Wix. SquareSpace is good for light customization only." :
        "Go use SquareSpace. Sorry we cannot help you.")
     )

  const get_in_touch_button = (doYouWantCustomSoftwareDevelopment === null ? "" :
      (doYouWantCustomSoftwareDevelopment == "Yes" ? <GetInTouchButton /> : "")
  )

  const cta_html = (result_text !== "") ?
    <div className={"wiggleInAnimation"} style={{display: 'inline-block'}}>
      <h2>{result_text}</h2><br/>{get_in_touch_button}
    </div> : ""

  const choose_do_you_want_custom_software_development_work = (event) => {
    setDoYouWantCustomSoftwareDevelopment(event.target.value);
  }
  return(
    <>
      <h1>Wix or SquareSpace?</h1>
      <h3>Do you want custom software development work?</h3>

      <YesNoChoice choose={choose_do_you_want_custom_software_development_work}
                   name={"do_you_want_custom_software_development"}>

      </YesNoChoice>
      <br />
      {cta_html}
    </>
  )
}

export default WixOrSquareSpace;