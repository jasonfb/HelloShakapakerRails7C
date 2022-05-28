import React from 'react'
import YesNoChoice from "./YesNoChoice";

const IsEcommerceAMinorPartOfYourBusiness = (props) => {

  return (
    <>
      <h3>Is Ecommerce a <strong>minor</strong> part of your business?</h3>
      <YesNoChoice
        name={"is_ecommerce_a_minor_part_of_your_business"}
        choose={props.chooseIsEcommAMinorPartOfYourBusiness} />

    </>
  )
}

export default IsEcommerceAMinorPartOfYourBusiness;