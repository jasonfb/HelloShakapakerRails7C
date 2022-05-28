import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Arrow from './Arrow'
import Dot from './Dot'
import RightArrow from './RightArrow'


const StyledLogo = styled.div`
  position: relative;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  border: solid 1px black;
`

const Logo = (props) => {
  const  [mode, setMode] = useState('animation')
  // const  [focus, setFocus] = useState(0)
  const [animationStep, setAnimationStep] = useState(4)

  useEffect(() => {
    goNextStep()
  }, [])

  const goNextStep = () => {
    const newStep = (animationStep > 3) ? 0 : animationStep + 1;
    setAnimationStep(newStep)
  }

  useEffect(() => {
    setTimeout(() => {
      goNextStep()
    }, 1500)
  }, [animationStep])

  let focus;

  switch(animationStep) {
    case 0: focus = ''; break;
    case 1: focus = 'red';  break;
    case 2: focus = 'green'; break;
    case 3: focus = 'refactor'; break;
    case 4: focus = ''; break;
  }

  //
  const chooseStep = (step_name) => {
    // console.log('choose step', step_name)
    // setFocus(step_name)
  }

  return ( <StyledLogo className={"rgr-logo"}>
    <Dot function={"red"} chooseStep={chooseStep} focusedStep={focus === 'red'}/>
    <Dot function={"green"} chooseStep={chooseStep} focusedStep={focus === 'green'}/>
    <Dot function={"refactor"} chooseStep={chooseStep} focusedStep={focus === 'refactor'}/>
    <Arrow position={1} />
    <Arrow position={2} />
    <Arrow position={3} />
    <RightArrow />

  </StyledLogo>)

}

export default Logo;