import React from 'react'

import styled from 'styled-components'


import HoverTarget from './HoverTarget'

import refactor_spinner_img from '../../../images/Refactor-spinner-0_290x290.png'

console.log("refactor_spinner_img is", refactor_spinner_img);



const StyledArrow = styled.div(props => {
  return `
  background-image: url(data:${props.img});
  width: ${props.width};
  height: ${props.height};
  top: ${props.top};
  left: ${props.left};
  z-index: ${props.zindex};
  background-repeat: no-repeat;
  position: absolute;
  transform: scale(2);
  background-size: cover;
`})

// const StyledDot = styled.div(props => (`
//   background-color: ${props.placement.backgroundColor || ""};
//   background-size: cover;
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
//   ${props.placement.backgroundImage ? "background-image: url(" + props.placement.backgroundImage + ");" : ''};\
// `))
//
// const StyledDotContainer = styled.div(props => {
//   return `background-color: black;`
// })

//   (`
//   top: ${props.placement.top || 0};
//   left:  ${props.placement.left || 0};
//
//   transition: transform 250ms;
//   position: absolute;
//   height: 8px;
//   width: 8px;
//   display: inline-block;
//   z-index: ${props.placement.zIndex};
// `))



const Dot = (props) => {
  const settings = {
    'red': { top: '-8%', left: '36%',
      backgroundColor: 'red',
      zIndex: props.focusedStep ?  8 : 6 },
    'green': { top: '77%', left: '73%',
      backgroundColor: 'green',
      zIndex: props.focusedStep ?  8 : 4},
    'refactor': {top: '66%', left: '-7%',
      backgroundColor: 'rgba(0,0,0,0)',
      zIndex: props.focusedStep ?  8 : 2}

  }

  const placement = settings[props.function]

  const styled_dot = placement ?  <>
    <StyledArrow
      className={`dot-container ${props.function} ${props.focusedStep ? 'expanded' : ''}  ` }
      placement={placement} >

      <StyledDot focusedStep={props.focusedStep}
                 className={`dot ${props.focusedStep && props.function==='refactor' ? 'spinning' : ''}`}
                 placement={placement} >
        <img src={placement.backgroundImage} />


      </StyledDot>
    </StyledArrow>

    <HoverTarget className={`hover-target ${props.function}`}
      function={props.function}
      placement={placement}
      chooseStep={props.chooseStep} /></> : ""


  return (
    styled_dot
  )
}

export default Dot