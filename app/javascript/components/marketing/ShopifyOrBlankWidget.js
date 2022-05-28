import React, {useState} from 'react'
import DoYouWantToBeOnARobustPlatform from "./DoYouWantToBeOnARobustPlatform";
import IsEcommerceAMinorPartOfYourBusiness from "./IsEcommerceAMinorPartOfYourBusiness";
import GetInTouchButton from "./GetInTouchButton";
import HowMuchWillingToPay from "./HowMuchWillingToPay";

const ShopifyOrBlankWidget = (props) => {
  const [otherEcommPlatform, setOtherEcommPlatform] = useState(undefined);
  const [doYouWantToBeOnARobustPlatform, setDoYouWantToBeOnARobustPlatform] = useState(null);
  const [isEcommAMinorPartOfYourBusiness, setIsEcommAMinorPartOfYourBusiness] = useState(null);
  const [whatIsYourBudget, setWhatIsYourBudget] = useState(null);

  const chooseOtherEcommPlatform = (event) => {
    setOtherEcommPlatform(event.target.value)
  }

  const chooseDoYouWantToBeOnARobustPlatform = (event) => {
    setDoYouWantToBeOnARobustPlatform(event.target.value);
  }

  const chooseIsEcommAMinorPartOfYourBusiness = (event) => {
    setIsEcommAMinorPartOfYourBusiness(event.target.value);uch
  }

  const chooseHowMuchWillingToPay = (event) => {
    setWhatIsYourBudget(event.target.value);
  }

  const do_you_want_to_be_on_a_robust_platform = (otherEcommPlatform !== undefined ? <DoYouWantToBeOnARobustPlatform chooseDoYouWantToBeOnARobustPlatform={chooseDoYouWantToBeOnARobustPlatform}/> : "")
  const is_comm_a_minor_part_of_your_business = (doYouWantToBeOnARobustPlatform === "No" ?
    <IsEcommerceAMinorPartOfYourBusiness
      chooseIsEcommAMinorPartOfYourBusiness={chooseIsEcommAMinorPartOfYourBusiness}/> : "")
  const how_much_willing_to_pay = (doYouWantToBeOnARobustPlatform === "Yes" &&

    (otherEcommPlatform !== undefined
    && otherEcommPlatform !== "Magento"
    && otherEcommPlatform !== "BigCommerce"
    && otherEcommPlatform !== "WooCommerce")

     ?
    <HowMuchWillingToPay name={"shopify-or-blank"}
                         message={"How much are you willing to pay?"}
                          show={true}
                         choose_how_much_willing_to_pay={chooseHowMuchWillingToPay} /> : "")

  let result_text = "";


  if (doYouWantToBeOnARobustPlatform === "No") {
    if (isEcommAMinorPartOfYourBusiness === "Yes") {
      switch (otherEcommPlatform) {
        case undefined:
          break;

        case "Magento":
          result_text = "Do not use Magento. Use Shopify."; break;
        case "BigCommerce":
          result_text = "Do not use BigCommerce. Use Shopify."; break;

        case "WooCommerce":
          result_text = "WooCommerce is OK but Shopify is better."; break;
        case "Wix":
          result_text = "Wix is an excellent choice for you."; break;
        case "SquareSpace":
          result_text = "SquareSpace is very limited for e-commerce. Sorry we cannot help you with SquareSpace."; break;

        case "Ecwid":
          result_text = "Ok stay with Ecwid for the time being. When you're ready to come to Shopify, let's be in touch."; break;
        case "Volusion":
          result_text = "Sorry we cannot help you with Volution. When you're ready to come to Shopify, let's be in touch."; break;
        case "Jimdo":
          result_text = "Ok stay with Jimdo. Sorry we cannot help you."; break;
        case "OpenCart":
          result_text = "Ok stay with OpenCart. Sorry we cannot help you."; break;
        case "PrestaShop":
          result_text = "Ok stay with PrestaShop if you really like it. Sorry we cannot help you today, but when you're ready to come to Shopify, let's be in touch."; break;
      }
    }

    if (isEcommAMinorPartOfYourBusiness === "No") {
      result_text = "Don't mess around. Go with Shopify.";
    }
  }

  if (doYouWantToBeOnARobustPlatform === "Yes") {
    switch (otherEcommPlatform) {
      case undefined:
        break;

      case "Magento":
        result_text = "Do not use Magento. Use Shopify."; break;
      case "BigCommerce":
        result_text = "Do not use BigCommerce. Use Shopify."; break;

      case "WooCommerce":
        result_text = "WooCommerce is OK but Shopify is better."; break;
      case "Ecwid":
        result_text = "We recommend Shopify."; break;
      case "Volusion":
        result_text = "We recommend Shopify."; break;
      case "Jimdo":
        result_text = "We recommend Shopify."; break;
      case "OpenCart":
        result_text = "We recommend Shopify."; break;
      case "PrestaShop":
        result_text = "We recommend Shopify."; break;
    }

    if (otherEcommPlatform === "Wix") {
      switch(whatIsYourBudget ) {
        case "A little":
          result_text = "Shopify is more robust for most e-commerce setups but Wix is better for marketing-heavy websites. You may want to consider separate store and marketing websites."
          break;
        case "A Lot":
          result_text = "Shopify better for you if you want to produce a refined, high-scale e-commerce store. Shopify has more integrations available than Wix. It is a more robust platform for integration with auxiliary services."
          break;
        case "Dont Know":
          result_text = "Shopify is cheaper for most e-commerce setups but Wix is better for marketing-heavy websites."
      }
    }

    switch(whatIsYourBudget ) {
      case "A little":
        if (otherEcommPlatform === "SquareSpace" || otherEcommPlatform === "Weebly")
          result_text = "Ok go with " + otherEcommPlatform + ", but we can't help you sorry.";
        break;
      case "A Lot":
        if ( otherEcommPlatform === "SquareSpace" || otherEcommPlatform === "Weebly")  result_text =  otherEcommPlatform + " is good but Shopify is better."
        break;
      case "Dont Know":
        if ( otherEcommPlatform === "SquareSpace" || otherEcommPlatform === "Weebly")  result_text = otherEcommPlatform + " could be good for you, but we can't help you sorry."
        break;
    }
  }

  const cta_html = (result_text !== "") ?
    <div className={"wiggleInAnimation"} style={{display: 'inline-block'}}>
      <h2>{result_text}</h2><br/><GetInTouchButton />
    </div> : ""



  return(
    <>
      <h1>Shopify or _____?</h1>

      <p>There are many players in e-commerce. We can help you navigate the field of e-commerce options.
      </p>
      <p>What other platform are you considering?


        <select name={"other_ecomm_platform"}
                className={"form-control"}
                value={otherEcommPlatform || undefined}
                onChange={chooseOtherEcommPlatform}>
          <option name={""} value={undefined} />

          <option value={"Magento"}>Magento</option>
          <option value={"BigCommerce"} >BigCommerce</option>
          <option value={"WooCommerce"} >WooCommerce</option>
          <option value={"Wix"} >Wix</option>
          <option value={"SquareSpace"} >SquareSpace</option>
          <option value={"Ecwid"} >Ecwid</option>
          <option value={"Weebly"} >Weebly</option>
          <option value={"Volusion"} >Volusion</option>
          <option value={"Jimdo"} >Jimdo</option>
          <option value={"OpenCart"} >OpenCart</option>
          <option value={"PrestaShop"} >PrestaShop</option>wix_shopify_feature_spec.rb
        </select>
      </p>

      {do_you_want_to_be_on_a_robust_platform}

      {is_comm_a_minor_part_of_your_business}

      {how_much_willing_to_pay}
      <br />
      {cta_html}
    </>
  )
}


export default ShopifyOrBlankWidget;