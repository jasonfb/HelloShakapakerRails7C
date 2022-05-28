import React, {useState} from 'react';
import YesNoChoice from "./YesNoChoice";
const DoYouWantToProduceHighQualityFlyingPagesQuicklyAtLittleCost = (props) => {
  return (<>
    <h3>
      Do you want to produce high quality flying pages quickly at little cost?
    </h3>
    <YesNoChoice choose={props.chooseDoYouWantHighQuality} name={"do_you_want_to_produce_high_quality_pages_quickly"}  />
  </>)
}
export default DoYouWantToProduceHighQualityFlyingPagesQuicklyAtLittleCost;