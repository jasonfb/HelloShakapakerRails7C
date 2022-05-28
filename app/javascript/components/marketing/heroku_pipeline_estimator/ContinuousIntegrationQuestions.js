import React from 'react'
import YesNoChoice from "../YesNoChoice";


const ContinuousIntegrationQuestions = (props) => {


  const to_give_you_a_cost = props.haveContinuousIntegration ? "To give you a cost we will need access to your codebase." : ""

  return (
    <>
      <h2 data-aos='zoom-in-up'>
        Step 3: Continuous Integration
      </h2>
      <div className='card-body bg-success rounded-corner' data-aos='flip-right'>
        <div className='card-title text-white text-standout'></div>
        <div className='card-text text-white'>
          <p className='text-standout'>
            Effective continuous integration is the hallmark of excellent software engineering today.
            If you don't already have a cloud-based CI runner, Helios recommends Github along with any of the
            following choices:
          </p>
          <ol>
            <ul>
              <li>
                Heroku CI
              </li>
              <li>
                Github CI
              </li>
              <li>
                Semaphore CI
              </li>
            </ul>
          </ol>
          Helios can give you a fixed-bid contract to get your existing test suite up & running on one of
          these cloud-based CI providers. (Access to codebase required.)
        </div>
      </div>



      <div className={'text-standout'} data-aos='fade-up-left' >
        <span className={"text-underline"}>
        Continuous integration means immediate feedback.
          </span>
        <h5>
          Do you already have continuous integration set up on your Github repository?
        </h5>
        <h4>

          <YesNoChoice name={"have_continuous_integration"}
                       choose={props.chooseHaveContinuousIntegration}
                       showDontKnow={true}
                       />
        </h4>

          <h5>
            Does your existing test suite have specs that run in a headless environment?
          </h5>

            <YesNoChoice name={"have_headless_specs"}
                         choose={props.chooseHaveHeadlessSpecs}
                         showDontKnow={true}
            />
      </div>


      <div>
        <h4 data-aos='flip-right'>
          How long does it take?
        </h4>
        <p className='text-standout' data-aos='flip-left'>
          A straightforward setup might take an afternoon of work, but a complicated app setup could take several weeks of setup.
        </p>
        <h4 data-aos='flip-down'>
          How much does it cost?
        </h4>
        <p className='text-standout' data-aos='flip-left'>

          <em>Price varies on the existing specs in your app.</em>
          <br />
          {to_give_you_a_cost}

          <a className={"btn btn-primary pull-right"} data-aos="zoom-in" href="/book-calendly">Get a Cost</a>

        </p>
        <div className={"text-right text-standout"}>
          {props.continuous_integration_cost_html}
        </div>

      </div>

    </>
  )
}

export default ContinuousIntegrationQuestions;