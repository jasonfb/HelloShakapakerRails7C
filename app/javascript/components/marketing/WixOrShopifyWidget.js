import React, {useState} from 'react';

import styled from 'styled-components'

import EcommerceImportanceQuestions from './EcommerceImportanceQuestions.js'
import DoYouNeedAnimatedPages from "./DoYouNeedAnimatedPages";
import HowMuchWillingToPay from './HowMuchWillingToPay'
import GetInTouchButton from "./GetInTouchButton";


const StyledWixOrShopifyWidget = styled.div`
`

const WixOrShopifyWidget = (props) => {
  const [howImportant, setHowImportant] = useState(null)
  const [needAnimations, setNeedAnimations] = useState(null)
  const [howMuchWillingToPay, setHowMuchWillingToPay] = useState(null)


  const choose_how_much_willing_to_pay = (event) => {
    setHowMuchWillingToPay(event.target.value)
  }


  // TODO: there must be a better way
  const result_text = howImportant > 3  ? "We recommend Shopify" :
    (howImportant && (needAnimations && needAnimations === "NO") ?
      "You should consider Wordpress or SquareSpace" :
        (needAnimations && needAnimations === "YES") ?
          ( howMuchWillingToPay ? ( howMuchWillingToPay === "A Lot" ?
              (howImportant > 2 ? "We recommend Shopify" : "We recommend Wix") :
              howMuchWillingToPay === "A little" ? "We recommend Wix" :   "We recommend Wix or Shopify") : "")
          : "")

  const cta_html = (result_text !== "") ?
      <div className={"wiggleInAnimation"} style={{display: 'inline-block'}}>
          <h2>{result_text}</h2><br/><GetInTouchButton />
      </div> : ""


  return (
    <StyledWixOrShopifyWidget className={"wix-v-shopify"}>
      <div className={"vcard bg-v1"}>
        <h1>Wix or Shopify?</h1>
        <h5>On scale of 1-5, how important is e-commerce to your business and brand?</h5>

        <EcommerceImportanceQuestions
            setHowImportant={setHowImportant}/>
            <br/>
            <DoYouNeedAnimatedPages setNeedAnimations={setNeedAnimations}
                                    show={(howImportant && howImportant < 4)} />

            <HowMuchWillingToPay
              name={"wix-or-shopify"}
              message={"How much are you willing to pay for custom animation work?"}
              choose_how_much_willing_to_pay={choose_how_much_willing_to_pay}
              show={(howImportant && howImportant < 4 && needAnimations === "YES")} />

              <br />
            {cta_html}
      </div>
    </StyledWixOrShopifyWidget>



  )
}


export default  WixOrShopifyWidget;