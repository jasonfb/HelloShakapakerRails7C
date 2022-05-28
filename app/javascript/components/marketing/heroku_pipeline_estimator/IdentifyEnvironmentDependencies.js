import React from 'react'


const IdentifyEnvironmentDependencies = (props) => {


  const chooseItem = (event) => {

    props.setEnvQuestion(event.target.name, event.target.checked)

  }


  const complexity_price = props.complexities * 1500;

  return (
    <>
      <br />
      <br />
      <h2 data-aos='fade-right'>
        Step 4: Identify Environmental Dependencies
      </h2>
      <div className='card-body bg-secondary rounded-corner' data-aos='fade-up-right'>
        <div className='card-title text-white text-standout'>
          <p>
            Start with a complexity score of 0.
          </p>
          Does any of the Following apply to you?
        </div>
        <div className='card-text text-white'>
          <ul>
            <li>
              <input onChange={chooseItem}
                     type={"checkbox"}
                     name={"specific"}
                     value={props.envQuestions['specific']}/>&nbsp;


              ENV variables are specific to QA environments
            </li>
            <li>
              <input onChange={chooseItem}
                     type={"checkbox"}
                     name={"external"}
                     value={props.envQuestions['external']}/>&nbsp;
              You have external Amazon services, like an SQS queue
            </li>
            <li>
              <input onChange={chooseItem}
                     type={"checkbox"}
                     name={"cant_cdn"}
                     value={props.envQuestions['cant_cdn']}/>&nbsp;
              You have an app that &nbsp;
              <strong>
                CAN'T
              </strong>&nbsp;
              use itself to serve its own assets as a CDN origin. For example, it must compile CSS, JS or other assets and upload them to an S3 bucket

            </li>

            <li>
              <input onChange={chooseItem}
                     type={"checkbox"}
                     name={"per_stage_envs"}
                     value={props.envQuestions['per_stage_envs']}/>&nbsp;
              You have staging or QA dependencies that need a per-stage setup.
            </li>
            <li>
              <input onChange={chooseItem}
                     type={"checkbox"}
                     name={"post_deploy"}
                     value={props.envQuestions['post_deploy']}/>&nbsp;
              You have special post-deploy or migration concerns.
            </li>
          </ul>
          For each one that applies to you,&nbsp;
          <strong>
            +1
          </strong>&nbsp;
          your complexity score.

          <br />
          <h4>
            Your complexity score:
            {props.complexities}
          </h4>

          <br />
          <h5>
            COST: $2950 USD (BASE PRICE)
            + ${complexity_price} complexity price
          </h5>
        </div>
      </div>
      <br />
      <br />

    </>
  )
}

export default IdentifyEnvironmentDependencies;