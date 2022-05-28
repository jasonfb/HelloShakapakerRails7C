
import React, {useState, useEffect} from 'react'

import styled from 'styled-components'

const StyledTagLine = styled.div`
  position: relative;
`

const Tagline = (props) => {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, props.pauseBeforeComingIn * 1000)

  }, [])


  const tagline_ghost = <h1
    style={{
      position: 'absolute',
      visibility: 'hidden'
    }}
    className='ghost'>
    {props.tagline}
  </h1>

  const tagline_html = visible ? <h1
  style={{position:  'absolute'}}
  data-aos={'zoom-in'}
  className={'animate-flicker'}
  >{props.tagline}</h1> : ""


  return (
    <>
      <StyledTagLine>
        {tagline_ghost}
        {tagline_html}
      </StyledTagLine>
    </>
  )
}

export default Tagline