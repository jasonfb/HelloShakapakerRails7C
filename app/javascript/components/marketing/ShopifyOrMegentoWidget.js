import React, {useState} from 'react'
import styled from 'styled-components'
import YesNoChoice from "./YesNoChoice";

import GetInTouchButton from "./GetInTouchButton";

const ShopifyOrMegentoWidget = (props ) => {
  const [doYouWantToWin, setDoYouWantToWin] = useState(null)

  const choose_want_to_win = (event) => {
    setDoYouWantToWin(event.target.value)
  }

  let result;


  if (doYouWantToWin == "Yes") {
    result = <>
      <h2 className={"wiggleInAnimation"}>Magento does not produce a quality result. Use Shopify instead.</h2>
      <GetInTouchButton />
    </>;
  }

  if (doYouWantToWin == "No") {
    result = <h4 className={"wiggleInAnimation"} style={{color: 'red'}}>Please re-evaluate your choices and try again.</h4>;


  }
  return (
    <>
      <h1>Shopify or Megento?</h1>

      <h2>
        Do you want to be on winning e-commerce platform?
      </h2>
      <YesNoChoice choose={choose_want_to_win} name={"want_to_win"} />


      <br />
      {result}



    </>
  )
}



export default ShopifyOrMegentoWidget;