
import React, {useState, useEffect} from 'react'

import IntakeChoice from './IntakeChoice'
import GetInTouchButton from "./GetInTouchButton";
import NextButton from "./NextButton";
const OmnibusIntakeChooser = (props) => {

  const intake_choices = [
    {name: "E-Commerce", key: 1},
    {name: "Blogging", key: 2},
    {name: "Realtime Data", key: 3},
    {name: "Platforms", key: 4},
    {name: "Custom Development Work", key: 5},
    {name: "Wix", key: 6},
    {name: "Shopify", key: 7},
    // {name: "Clevertap", key: 8},
    {name: "GetEmails", key: 9},
    {name: "React JS", key: 10},
    {name: "React Native", key: 11},
    {name: "DevOps", key: 12},
    // {name: "Solidity (Blockchain or Crypto)", key: 13},
    {name: "NextJS/Node", key: 14},
    {name: "Ruby/Rails", key: 15},
    {name: "SEO or Analytics", key: 16},
    {name: "Social Media Marketing", key: 17},
  ]

  const [chosen_intakes, setChosenIntakes] = useState(intake_choices.map((x) => {return 0}));


  const toggleIntakeChoice = (event) => {
    let key = Number(event.target.dataset.intakeChoiceId);
    let new_chosen_intakes = [...chosen_intakes];

    new_chosen_intakes[key] = !new_chosen_intakes[key]
    setChosenIntakes(new_chosen_intakes);
  }



  const intake_choices_html = intake_choices.map( (item, index) => {
    return <IntakeChoice name={item.name}
                         id={item.key}
                         key={item.key}
                         toggled={chosen_intakes[item.key]}
                         toggleIntakeChoice={toggleIntakeChoice}/>
  })

  return (
    <div >
      <form id={"omnibus-intake-chooser-form"} data-verso-form={"omnibus-intake-chooser"}>
        <h2>What brings you to Helios today?</h2>
        {intake_choices_html}
        <NextButton visible={chosen_intakes.some((x) => {return x==1})} />

      </form>

    </div>
  )
}

export default OmnibusIntakeChooser