import react from 'react'
import WrappedInputElement from "../basic_elements/wrapper_input_element";
import React, {useState} from "react";
import styled from 'styled-components'

const StyledEcommerceImportanceQuestions = styled.div`
  display: flex;
  align-content: row;
`
const EcommerceImportanceQuestions = (props) => {
  var nums = [1,2,3,4,5]


  const choose_ecomm_importance = (event) => {
    props.setHowImportant(event.target.value)
  }

  const ecomm_importance_elements_html =  nums.map((x) =>
    <WrappedInputElement key={x}
                         onChange={choose_ecomm_importance}
                         name={"ecomm_importance"}
                         value={x}
                         label={x}
                         className={"inputElement"} />
  )
  return (
    <StyledEcommerceImportanceQuestions>
      {ecomm_importance_elements_html}
    </StyledEcommerceImportanceQuestions>

  )
}

export default EcommerceImportanceQuestions;