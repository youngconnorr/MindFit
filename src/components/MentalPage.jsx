// import React from 'react'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import './SurveyPage.css'
import 'firebase/compat/firestore';
import { MQuestions } from './MentalQuestions'
import SurveyImage3 from '../assets/survey-page-3-youcode.png';
import SurveyImage2 from '../assets/survey-page-2-youcode.png';
import SurveyImage from '../assets/survey-page-1-youcode.png';
import Meditation from '../assets/meditation.gif';
// import { useCollectionData } from 'react-firebase-hooks/firestore'


// const firestore = firebase.firestore();


const MentalPage = (curStreak) => {

    const [num, setNum] = useState(0);

    const plusCurStreak = () => {
        curStreak.incrementCurStreak()
    }

    function increment() {
        setNum(num + 1)
    }

    return (
        <div>
            <h1 className="inspiringCaption">Lets get breathing</h1>
            <div className={`question-card`}>
                {MQuestions.map((question, index) =>
                    <div className={`img-fade ${num === index ? 'active' : ''}`} key={index}>
                        {num === index ?
                            <div>
                                <h2>question {question.questionNum}</h2>
                                <p>{question.prompt}</p>
                                {question.answers.map((question, index) =>
                                    <div className="question-container" key={index}>
                                        <button onClick={increment}>
                                            {question}
                                        </button>
                                    </div>)}
                            </div>
                            : null}
                    </div>
                )}
            </div>

            <div>
                {(num === 3) ?
                    <div className="question-container">
                        <button className="addStreak" onClick={plusCurStreak}>Add to your streak!</button>
                        <button onClick={increment}>Submit answer!</button>
                    </div>

                    :

                    null
                }
            </div>

            <div>
                {(num === 4) ?
                    <div>
                        <img src={Meditation} alt="" className="med-image" />
                    </div>
                    :
                    null
                }
            </div>

            <div className="Image-card">
                {(num === 0) ? <img className="side-image" src={SurveyImage2} alt="" /> : null}
                {(num === 1) ? <img className="side-image" src={SurveyImage3} alt="" /> : null}
                {(num >= 2) ? <img className="side-image" src={SurveyImage} alt="" /> : null}
            </div>

        </div>
    )
}


export default MentalPage

