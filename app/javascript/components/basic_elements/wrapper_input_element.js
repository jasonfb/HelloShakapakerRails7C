import React from 'react';

import styled from 'styled-components';

const StyledWrappedInputElement = styled.div`
  flex-basis: 50px;
  font-size: 1.2em;
`

const WrappedInputElement = (props) => {
  return (
    <StyledWrappedInputElement>

      <label htmlFor={props.name + "_" + props.value} className={"btn btn-primary"}>

          <input onChange={props.onChange}
                 type={"radio"}
                 name={props.name}
                 id={props.name + "_" + props.value}
                 value={props.value}></input>

          {props.label}</label>
    </StyledWrappedInputElement>
  )
}

export default WrappedInputElement