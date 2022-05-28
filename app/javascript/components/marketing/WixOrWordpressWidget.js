import React, {useState} from 'react';
import DoYouHaveAReasonWhyYouLikeWordpress from "./DoYouHaveAReasonWhyYouLikeWordpress";
import DoYouWantToProduceHighQualityFlyingPagesQuicklyAtLittleCost
  from "./DoYouWantToProduceHighQualityFlyingPagesQuicklyAtLittleCost";
import DoYouWantToSucceedOnlineToday from "./DoYouWantToSucceedOnlineToday";
import GetInTouchButton from "./GetInTouchButton";
import YesNoChoice from "./YesNoChoice";


const WixOrWordpressWidget = (props) => {
  const [ legacyWordpress, setLegacyWordpress ] = useState(null);
  const [ reasonLikeWordpress, setReasonLikeWordpress] = useState(null);
  const [ wantProduceHighQuality, setWantProduceHighQuality] = useState(null);
  const [ wantToSucceed, setWantToSucceed] = useState(null);

  let result_text = "";
  switch (legacyWordpress ) {
    case "No":
      switch (reasonLikeWordpress) {
        case "Yes":
          switch(wantProduceHighQuality) {
            case "Yes":
              result_text = "Use Wix."
              break;
            case "No":
              switch(wantToSucceed) {
                case "Yes":
                  result_text = "Let's discuss your needs directly."
                  break;
                case "No":
                  result_text = <strong style={{color: 'red'}}>Please think your life choices and try again.</strong>
                  break;
              }
              break;
          }
          break;
        case "No":
          result_text = "Go with Wix."
          break;
      }
      break;
    case "Yes":

      switch(reasonLikeWordpress ) {
        case "No":
          result_text = "We can help you migrate to a clean and professional Wix website."
          break;
        case "Yes":
          result_text = ['Ok Wordpress is a good choice for you. Please see this ',
            <a href={"/wordpress"}>Wordpress page</a>,
          ' for details.']
      }
    break;
  }

  const cta_html = (result_text !== "") ?
    <div className={"wiggleInAnimation"} style={{display: 'inline-block'}}>
      <h2>{result_text}</h2><br/><GetInTouchButton />
    </div> : ""

  const chooseReasonLikeWordpress = (event) => {
    setReasonLikeWordpress(event.target.value)
  }

  const [ doYouWantHighQuality, setDoYouWantHighQuality ] = useState(null) ;

  const chooseDoYouWantHighQuality = (event) => {
    setWantProduceHighQuality(event.target.value)
  }

  const chooseDoYouWantToSucceed = (event) => {
    setWantToSucceed(event.target.value);
  }


  const choose_legacy_wordpress = (event) => {
    setLegacyWordpress(event.target.value);
  }

  const do_you_have_a_reason_you_like_wordpress =
    (legacyWordpress === null ?  "" :
      <DoYouHaveAReasonWhyYouLikeWordpress reasonLikeWordpress={reasonLikeWordpress}
                                         chooseReasonLikeWordpress={chooseReasonLikeWordpress}

    />)

  const do_you_want_to_produce_high_quality_flying_pages =
    (legacyWordpress === "No" && reasonLikeWordpress === "Yes") ?
      <DoYouWantToProduceHighQualityFlyingPagesQuicklyAtLittleCost
        doYouWantHighQuality={doYouWantHighQuality}
        chooseDoYouWantHighQuality={chooseDoYouWantHighQuality}
      /> :  ""


  const do_you_want_to_succeed_online_today =
    (legacyWordpress === "No" && reasonLikeWordpress === "Yes" && wantProduceHighQuality == "No") ? <DoYouWantToSucceedOnlineToday chooseDoYouWantToSucceed={chooseDoYouWantToSucceed}/> : ""

    return (
        <>
                <h1>
                        Wix or Wordpress?
                </h1>

                <h3> Do you have a legacy WordPress website?</h3>

          <YesNoChoice choose={choose_legacy_wordpress} name={"legacy_wordpress"} />


          {do_you_have_a_reason_you_like_wordpress}

          {do_you_want_to_produce_high_quality_flying_pages}

          {do_you_want_to_succeed_online_today}
<br />
          {cta_html}

        </>
    )

}

export default WixOrWordpressWidget