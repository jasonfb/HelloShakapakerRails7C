import React from 'react'



const HPEstimate = (props) => {
  return (
    <>

    <h2>Your Cost</h2>
      <table style={{ marginRight: 0, marginLeft: 'auto'}} className={"text-standout"}>

        <tbody>
          <tr>
            <td>
              Step 1:
            </td>
            <td>
              {props.single_app_estimate_html}
            </td>
          </tr>
          <tr>
            <td>
              Step 2:
            </td>
            <td>
              {props.github_estimate_html}

            </td>
          </tr>
          <tr>
            <td>
              Step 3:
            </td>
            <td>
              {props.continuous_integration_cost_html}
            </td>
          </tr>
          <tr>
            <td>
              Step 4:
            </td>
            <td>
              Base Price $2950
            </td>
          </tr>
          <tr>
            <td>
            </td>
            <td>
              complexity price ${props.complexity_price}
            </td>
          </tr>
          <tr>
            <td>
              TOTAL:
            </td>
            <td>
              ${props.total}
            </td>
          </tr>
        </tbody>


      </table>
    </>
  )
}

export default HPEstimate;