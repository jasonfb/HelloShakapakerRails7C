import React from 'react'
import DownArrow from '../../images/down-cartoon-arrow.png'


const FixedCostResponse = (props) => {
  return (
    <div className={"text-center fixed-cost-response"}>
      <br />
      <h4>For some clients, we can offer fixed cost contracts between $3000 - $6000.</h4>
      <br/>
      <em>The process:</em>
      <br/>
      <p data-aos-delay="50" data-aos={'zoom-in'}>Initial needs evaluation (fee applies)</p>
      <img  data-aos-delay="100"  data-aos={'zoom-in'} src={DownArrow} alt={"down arrow"} />

      <p  data-aos-delay="200" data-aos={'zoom-in'} >We work with you to scope, spec, and build a proof of concept up-front (no upfront cost).</p>
      <img  data-aos-delay="250"  data-aos={'zoom-in'} src={DownArrow} alt={"down arrow"} />

      <p  data-aos-delay="300"  data-aos={'zoom-in'} >You get a <strong>Statement of Work</strong> with <span style={{textDecoration: 'underline'}}>fixed cost</span>.</p>
      <img data-aos-delay="350"  data-aos={'zoom-in'} src={DownArrow} alt={"down arrow"} />

      <p  data-aos-delay="400"  data-aos={'zoom-in'}>You agree to SOW on Docusign and pay half deposit up-front.</p>
      <img  data-aos-delay="450"  data-aos={'zoom-in'} src={DownArrow} alt={"down arrow"} />

      <p  data-aos-delay="500"  data-aos={'zoom-in'}>Your project is executed and delivered to a staging or sandbox environment.</p>
      <img data-aos-delay="550" data-aos={'zoom-in'} src={DownArrow} alt={"down arrow"} />

      <p  data-aos-delay="600" data-aos={'zoom-in'} >You pay remainder of contract.</p>
      <img data-aos-delay="650" data-aos={'zoom-in'} src={DownArrow} alt={"down arrow"} />

      <p data-aos-delay="700" data-aos={'zoom-in'}>Code is delivered to you or your developers.</p>

    </div>
  )
}


export default FixedCostResponse;