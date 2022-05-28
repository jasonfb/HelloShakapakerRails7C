import React, {useState, useEffect} from 'react'
import SingleAppDeployQuestions from "./SingleAppDeployQuestions";
import GetOnGithubQuestions from "./GetOnGithubQuestions";
import IdentifyEnvironmentDependencies from "./IdentifyEnvironmentDependencies";
import ContinuousIntegrationQuestions from "./ContinuousIntegrationQuestions";
import HPEstimate from "./HPEstimate";

const HerokuPipelineEstimateBuilder = (props) => {
  const [isSingleDeploy, setIsSingleDeploy] = useState(undefined)
  const [isOnGithub, setIsOnGithub] = useState(undefined)
  const [haveContinuousIntegration, setHaveContinuousIntegration] = useState(undefined)

  const [haveHeadlessSpecs, setHaveHeadlessSpecs] = useState(undefined)



  const github_estimate = isOnGithub == "No" ?  300 : 0
  const github_estimate_html = github_estimate == undefined  ? "(incomplete)" : (github_estimate == 0 ? "None" : ` $ ${github_estimate}.00`)

  const single_app_estimate_html = isSingleDeploy == "Yes" ? "None" : "Priced upon evaluation"
  const ci_cost = haveContinuousIntegration == "Yes" ? "None" : "Priced upon evaluation"

  const continuous_integration_cost_html =
    haveContinuousIntegration == "Yes" ?
    haveHeadlessSpecs == "Yes" || haveHeadlessSpecs == "No" ? ci_cost : undefined
    : "Priced upon evaluation"


  const [envQuestions, setEnvQuestions] = useState({
    specific: false,
    external: false,
    cant_cdn: false,
    per_stage_envs: false,
    post_deploy: false
  })

  const chooseSingleDeploy = (event) => {
    setIsSingleDeploy(event.target.value)
  }

  const chooseIsOnGithub = (event) => {
    setIsOnGithub(event.target.value)
  }

  const chooseHaveContinuousIntegration = (event) => {
    setHaveContinuousIntegration(event.target.value);
  }

  const chooseHaveHeadlessSpecs = (event) => {
    console.log("set have headless spcs....")
    setHaveHeadlessSpecs(event.target.value)
  }

  const setEnvQuestion = (name_of_question, value) => {
    console.log("setEnvQuestion", name_of_question, value)
    let new_envQuestions = {...envQuestions}
    new_envQuestions[name_of_question] = value
    setEnvQuestions(new_envQuestions)
  }

  const calc_complexities = Object.entries(envQuestions).filter(([key, value]) => {return value === true ? key : undefined} )
  const complexities = calc_complexities ? calc_complexities.length : 0;
  const complexity_price = complexities * 1500;

  const estimate_complete = (isSingleDeploy !== undefined &&
      isOnGithub !== undefined &&
      haveContinuousIntegration !== undefined)


  const total = github_estimate + 2950 + complexity_price;

  const estimate_html = estimate_complete ? <HPEstimate
      single_app_estimate_html={single_app_estimate_html}
      github_estimate_html={github_estimate_html}
      complexity_price={complexity_price}
      continuous_integration_cost_html={continuous_integration_cost_html}
      total={total}
  /> : ""


  const incomplete_estimate_html = estimate_complete ? "" : <strong>
    YOUR ESTIMATE: (incomplete)
  </strong>

  return (
    <>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-12"}>



            <h1>
              Why We Love the Heroku Pipeline and You Should Too
            </h1>

            <p>


              Most engineering teams are drowning because they haven't put a solid process in place to ensure high quality.

              Quality is the very center and heart of software engineering.
&nbsp;
              <span className={"text-underline"}>
              As the CEO or manager your primary job is to manage the cost of change while keeping the quality high.
              </span>
</p><p>
              <strong>
                The #1 thing you can do to help your team do this is to build an effective CI/CD pipeline.
              </strong>
            <br />

              Continuous integration (CI) means your regression tests run on every pull request. Continuous deployment (CD) means your deployment to staging happens with one click and your deployment to production happens with one more click on the Heroku Pipeline dashboard.

          </p><p>
              The foundation of both of these is solid test suite.

          </p>
            <h5>Helios has your lifeline: <span className={'text-underline'}>The Heroku Pipeline</span>.</h5>
            <p>

<strong>
  If you're not already using the Heroku pipeline, we can move your Rails or React app onto the Heroku pipeline.

</strong>&nbsp;

              The Heroku pipeline is the best-in-class pipeline for deploying modern apps.

              In particular, each pull request in Github automatically creates a new review app environment -- a sandbox environment
              where you can QA and try out the code changes.

              This means no more stage management!

              How many times do you have to write on tickets what stages your stories are? Imagine never having to do that again.

            <br />
            <strong>
              Many CEOs, technical managers, and even developers underestimate how much of their time is currently going to stage management, deploy management, and branch management.
</strong>&nbsp;

              Coming onto the Heroku pipeline eliminates all of this hassle.

              <br />
            <em className={'text-underline'}>
              For Rails and Ruby apps, the Heroku pipeline is the only deployment and development platform we support.
            </em>
              </p>
          <p>
            <span className={"text-standout"}>
            Helios can help you move onto the Heroku pipeline and set up your app with a CI strategy.
              &nbsp;
            <strong>
              We offer this only as a flat-fee. The fee includes all parts of the migration, including deployment, documentation, and two training sessions with you or your staff on the mechanics of your new setup.
            </strong>
            </span>


            </p><p>

            <strong>
              This is a difficult job. Helios is an industry leader who has the technical ability to execute this difficult task effectively and in a cost-controlled way.
            </strong>
            &nbsp;

            <br />


            </p>
            <br />
            <br />
            <hr />
            <h3>
              The estimator below will help you scope your Heroku Pipeline CI/CD project.

            </h3>

            <em>Scroll down to see your cost estimate.</em>
            <hr />

            <br /><br />
            <SingleAppDeployQuestions
              isSingleDeploy={isSingleDeploy}
              chooseSingleDeploy={chooseSingleDeploy}
            />
            <br /><br />
            <GetOnGithubQuestions isOnGithub={isOnGithub}
                                  chooseIsOnGithub={chooseIsOnGithub}
            />
            <div className={"text-right text-standout"}>
              {github_estimate_html}
            </div>


            <br /><br />
            <ContinuousIntegrationQuestions

              chooseHaveHeadlessSpecs={chooseHaveHeadlessSpecs}
              haveHeadlessSpecs={haveHeadlessSpecs}
              haveContinuousIntegration={haveContinuousIntegration}
              chooseHaveContinuousIntegration={chooseHaveContinuousIntegration}
              continuous_integration_cost_html={continuous_integration_cost_html}
            />



<br /><br />
            <IdentifyEnvironmentDependencies
              complexities={ complexities}
              envQuestions={envQuestions}
              setEnvQuestion={setEnvQuestion}

            />



          </div>
        </div>


        <div className={"row"}>
          <div className={"col-md-6"}>

          </div>
          <div className={"col-md-6 text-right"}>
            <div className={"show-estimate"} data-aos='zoom-out-down'>
              {incomplete_estimate_html}

              <br />
              <br />
              {estimate_html}
            </div>
          </div>
        </div>
      <div className={"row"}>
        <div className={"col-md-12 text-right"}>
          <a className={"btn btn-primary btn-large"} data-aos="zoom-in" href="/book-calendly">Start
            Evaluation Process</a>
        </div>
      </div>
      <br />
      </div>

    </>
  )
}

export default HerokuPipelineEstimateBuilder;