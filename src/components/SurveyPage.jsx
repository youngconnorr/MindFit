// import React from 'react'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import './SurveyPage.css'
import 'firebase/compat/firestore';
// import { useCollectionData } from 'react-firebase-hooks/firestore'

import PhysicalPage from './PhysicalPage';
import MentalPage from './MentalPage';

import SurveyImage from '../assets/survey-page-1-youcode.png';


// const firestore = firebase.firestore();


const SurveyPage = (curStreak) => {


  const [question, setQuestion] = useState(1)
  const [mental, setMental] = useState(false)
  const [physical, setPhysical] = useState(false)


  function next_question() {
    setQuestion(question + 1)
  }

  const incrementCurStreak = () => {
    curStreak.plusStreak()
  }


  return (

    <div>
      <div className="question-card">
        {question === 2 ? null

          :
          <div>

            <h1>question 1</h1>
            <p>what would you like to work on today?</p>
            <div className="question-container">
              <button className={physical ? "hidden" : "physical"}
                onClick={() => {
                  setPhysical(true)
                  setMental(false)
                  next_question()
                }}>
                physical wellness
              </button>
              <button className="Mental"
                onClick={() => {
                  setPhysical(false)
                  setMental(true)
                  next_question()
                }}>
                mental wellness
              </button>

            </div>
          </div>
        }

        <div>
          {(question === 1) ? <img className="side-image" src={SurveyImage} alt="" /> : null}

          {(question === 2) && null}
        </div>


      </div>

      {(question > 1 && physical) && <span><PhysicalPage incrementCurStreak={incrementCurStreak}/></span>}
      {(question > 1 && mental) && <span><MentalPage incrementCurStreak={incrementCurStreak}/></span>}


    </div>
  )
}

export default SurveyPage
