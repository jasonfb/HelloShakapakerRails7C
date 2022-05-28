import React , {useState} from 'react'
import GetInTouchButton from "./GetInTouchButton";

import FixedCostResponse from "./FixedCostResponse";
import TimeAndMaterialsResponse from './TimeAndMaterialsResponse';

const ContractTypeChooser = (props) => {
  const [choice, setChoice] = useState(null)

  const choose = (event) => {
    setChoice(event.target.value)
    event.target.blur()
  }
  const result_text = choice === null ? "" : (choice === "Fixed Cost" ? <FixedCostResponse /> :  <TimeAndMaterialsResponse />)

  const cta_html = (result_text !== "") ?
    <div className={"wiggleInAnimation"} style={{display: 'inline-block'}}>
      {result_text}<br/><GetInTouchButton />
    </div> : ""

  return (
    <>
      <div className={"row"}>
        <div className={"col-md-12"}  data-aos={'flip-in'}>
          <h3>What type of engagement are you interested in?</h3>
<br />
        <label htmlFor={"contract_type_chooser_fixed_cost"} className={"btn btn-primary"}>

        <input name={"contract_type_chooser"}
               type={"radio"}
               value={"Fixed Cost"}
               onChange={choose}
               id={"contract_type_chooser_fixed_cost"}/>
          &nbsp;
        Fixed Cost Contract</label>
      <label htmlFor={"contract_type_chooser_time_and_materials"} className={"btn btn-primary"}>

        <input name={"contract_type_chooser"}
               type={"radio"}
               value={"Time and Materials"}
               onChange={choose}
               id={"contract_type_chooser_time_and_materials"}/>
        &nbsp;
        Time & Materials Contract</label>
      </div>
      </div>

      {cta_html}
    </>
  )


}

export default ContractTypeChooser;

