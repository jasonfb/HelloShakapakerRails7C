import React from 'react';
import styled from 'styled-components';

const StyledDoYouNeedAnimatedPages = styled.div`
`
const DoYouNeedAnimatedPages = (props) => {
  const choose_need_animations = () => {
    props.setNeedAnimations(event.target.value)
  }

  return (
    <StyledDoYouNeedAnimatedPages className={"thing-that-discloses do-you-need-animations " + (props.show ? 'visible' : 'hidden')}>
      <h3>Do you need animated marketing and landing pages where everything flies around?</h3>

      <label htmlFor={"need_animations_yes"} className={"btn btn-primary"}>
          <input name={"need_animations"}
                 onChange={choose_need_animations}

                 type={"radio"}
                 value={"YES"}
                 id={"need_animations_yes"} />
          YES</label>
      &nbsp;

      <label htmlFor={"need_animations_no"} className={"btn btn-primary"}>
          <input name={"need_animations"}
                 onChange={choose_need_animations}

                 type={"radio"}
                 value={"NO"}
                 id={"need_animations_no"}/>
          NO</label>
    </StyledDoYouNeedAnimatedPages>
  )
}
export default DoYouNeedAnimatedPages;