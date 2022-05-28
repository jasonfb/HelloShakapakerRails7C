import React from 'react'
import YesNoChoice from "../YesNoChoice";



const GetOnGithubQuestions = (props) => {
  const is_on_github = props.isOnGithub;
  const done = is_on_github == "Yes";
  const done_styles = done ? {'text-decoration': 'line-through'} : {}

  return (
    <>

      <h2 data-aos='fade-down' style={done_styles}>
        Step 2: GitHub
      </h2>

      <h4>Is your repository hosted on Github?</h4>
      <YesNoChoice name={"is_on_github"} choose={props.chooseIsOnGithub} />
    </>
  )
}


export default GetOnGithubQuestions