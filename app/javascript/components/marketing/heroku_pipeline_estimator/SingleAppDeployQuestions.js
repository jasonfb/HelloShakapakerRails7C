import React from 'react'
import YesNoChoice from "../YesNoChoice";


const SingleAppDeployQuestions = (props ) => {


  const is_single_deploy = props.isSingleDeploy;

  const done = props.isSingleDeploy == "Yes";
  const done_styles = done ? {textDecoration: 'line-through'} : {}

  return (
    <>
      <h2 data-aos='fade-down' style={done_styles}>
        Step 1: Single Deployment
      </h2>
      <div className='card-body bg-light rounded-corner' data-aos='zoom-out-right' style={done_styles}>
        <div className='card-title text-dark text-standout'>
          Why You Need Single-App Deploys
        </div>
        <div className='card-text text-dark'>
          <ul>
            <li>
              Unified changes move through your pipeline in lock-step through the SDLC (Software Development
              Lifecycle)
            </li>
            <li>
              Single source of truth
            </li>
            <li>
              Integration with 3rd party services
            </li>
            <li>
              Simplifies deploy management
            </li>
            <li>
              Simplifies environmental setup
            </li>
            <li>Single app, no more booting multiple apps</li>
            <li>Reduction of environment variables proliferating throughout two separate apps. The new unified app shares environment variables between the front-end and back-end.</li>
            <li>Elimination of need to explicitly build CSS via SASS or to use sass-watch during development. Unlike the previous build, the compiled .css file is not checked into the repository, eliminating friction for all developers around managing merge conflicts in the previous CSS file and managing rebuilding it by hand for small changes.</li>

          </ul>
        </div>
      </div>

      <div>

        <br /><br />
      <h5>
          Is your app single-app deployable?
        </h5>


        <YesNoChoice name={"is_single_deploy"}
                     choose={props.chooseSingleDeploy}
                     showDontKnow={true}/>
      </div>


    </>
  )
}


export default SingleAppDeployQuestions