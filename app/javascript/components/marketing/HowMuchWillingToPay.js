import React from 'react'
import styled from 'styled-components'

const StyledHowMuchWillingToPay = styled.div`
`

const HowMuchWillingToPay = (props) => {



  const name = props.name;
  return (
    <StyledHowMuchWillingToPay className={`${name}__how-much-willing-to-pay thing-that-discloses ` + (props.show ? 'visible' : 'hidden')}>
      <h3>{props.message}</h3>
      <br />

      <label htmlFor={`${name}__how_much_willing_to_pay_a_lot`} className={"btn btn-primary"}>
          <input name={`${name}__how_much_willing_to_pay`}
                 onChange={props.choose_how_much_willing_to_pay}
                 type={"radio"}
                 value={"A Lot"}
                 id={`${name}__how_much_willing_to_pay_a_lot`} />
          A Lot</label>
      &nbsp; &nbsp;

      <label htmlFor={`${name}__how_much_willing_to_pay_dont_know`} className={"btn btn-primary"}>
          <input name={`${name}__how_much_willing_to_pay`}
                 type={"radio"}
                 value={"Dont Know"}
                 onChange={props.choose_how_much_willing_to_pay}
                 id={`${name}__how_much_willing_to_pay_dont_know`}/>
          Don't know</label>

      &nbsp; &nbsp;

      <label htmlFor={`${name}__how_much_willing_to_pay_a_little`}  className={"btn btn-primary"}>
          <input name={`${name}__how_much_willing_to_pay`}
                 type={"radio"}
                 value={"A little"}
                 onChange={props.choose_how_much_willing_to_pay}
                 id={`${name}__how_much_willing_to_pay_a_little` }/>
          A little</label>
    </StyledHowMuchWillingToPay>
  )
}

export default HowMuchWillingToPay