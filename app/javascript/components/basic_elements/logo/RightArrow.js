import React from 'react'
import styled from 'styled-components'


import right_arrow from '../../../images/right-arrow.svg'

const StyledRightArrow = styled.div`
  position: absolute;
  left: 35%;
  top: -9%;
  z-index: 7;
  width: 18%;
  height: 29%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${right_arrow});
`



const RightArrow = () => {
  return(<StyledRightArrow className={"arrow-over-red-dot"}>
    </StyledRightArrow>
  )

}

export default RightArrow