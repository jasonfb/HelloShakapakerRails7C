

import React, {useState, useEffect} from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import _, { shuffle} from 'lodash'

import styled from 'styled-components'
import Tagline from './Tagline.js'



const NextJsAnimationFlipper = ( props ) => {

  const list = ['Smart Routing', 'SSR or Static Generation', 'Perfect for SEO',
    'Uncompromising','Fast Refresh', 'A Well-Groomed Framework'
  ]


  const [step, setStep] = useState(0)
  const [data, setData] = useState(list)
  const [partTwoVisible, setPartTwoVisible] = useState(false)


  const shuffleList = () => {
    const new_list = _.shuffle(list)
    setData(new_list)
  }

  const dropAndThenShuffle = () =>  {
    // why doesn't setStep increment here

    setTimeout(() => {
      console.log("step is", step)
      if (step < 5) {
        shuffleList()
        dropAndThenShuffle()
        setStep(step+1)
      }
    }, 1500)
  }
  useEffect((props) => {
    setTimeout(() => {
      dropAndThenShuffle()
    }, 1500)


  }, [])

  return (
    <>
      <Flipper flipKey={data.join('')}>
        <ul>
          {data.map(d => (
            <Flipped flipId={d} key={d}>
              <li>
                <h4>{d}</h4>
              </li>
            </Flipped>
          ))}
        </ul>

      </Flipper>

      <Tagline tagline={"The Future"}
               pauseBeforeComingIn={9} />

    </>
  )

}


export default NextJsAnimationFlipper;