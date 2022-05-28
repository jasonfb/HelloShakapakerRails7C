import React from 'react'
import styled from 'styled-components'

import arrow_img1 from '../../../images/120-deg-arrow1.svg'
import arrow_img2 from '../../../images/120-deg-arrow2.svg'
import arrow_img3 from '../../../images/120-deg-arrow3.svg'

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


const Arrow = (props) => {
  const settings = {
    1: {top: '20%', left: '57%',     width: '32.8%',   height: '46.3%',  img: `'data:image/svg+xml;utf8,${arrow_img1}'`, zindex: 5},
    2: {width: '48.1%', height: '33.33%', top: '62%', left: '29.1%', img: `'data:image/svg+xml;utf8,${arrow_img2}'`, zindex: 3},
    3: {width: '31%', height: '44.9%',  top: '19%', left: '6%', img: `'data:image/svg+xml;utf8,${arrow_img3}'`, zindex: 1}
  }


  return (
    <StyledArrow {...settings[props.position]} />
  )
}


export default Arrow