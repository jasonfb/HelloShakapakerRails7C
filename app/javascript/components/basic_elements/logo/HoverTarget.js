import React, {useEffect} from 'react'

import styled from "styled-components";

const StyledHoverTarget = styled.div(props => (`
  position: absolute;
  height: 25%;
  width: 25%;
  display: block;
  z-index: 10;
  top: ${props.placement.top || 0};
  left:  ${props.placement.left || 0};
`))

const HoverTarget = (props) => {
  const clickTarget = (event) => {
    // console.log("props.chooseStep is", props.chooseStep)
    // console.log("calling props.chooseStep with " + props.function)
    props.chooseStep(props.function)
  }


  return (<StyledHoverTarget className={`hover-target ${props.function}`} onClick={clickTarget} placement={props.placement} />)
}



export default HoverTarget