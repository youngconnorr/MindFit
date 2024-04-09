// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'firebase/compat/firestore';
import SurveyImage3 from '../assets/survey-page-3-youcode.png';
import SurveyImage2 from '../assets/survey-page-2-youcode.png';
import SurveyImage from '../assets/survey-page-1-youcode.png';
import ArctJacket from '../assets/Arcteryx-jacket.avif';
import { PQuestions } from './PhysicalQuestions'

const PhysicalPage = (curStreak) => {

    const [num, setNum] = useState(0);

    const plusCurStreak = () => {
        curStreak.incrementCurStreak()
    }

    function increment() {
        setNum(num + 1)
    }

    function ArcteryxButton() {
        const redirect = () => {
            window.open("https://arcteryx.com/ca/en/shop/mens/gamma-mx-hoody", "_blank", "noopener,noreferrer");
        };


        return (
            <button className="ark-btn" onClick={redirect}>Arc&apos;teryx Store</button>
        )
    }


    return (
        <div>
            <h1 className="inspiringCaption">lets get breathing and moving</h1>
            <div className={`question-card`}>
                {PQuestions.map((question, index) =>
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
                        <button className="addStreak" onClick={plusCurStreak}>Add to your streak</button>
                        <button onClick={increment}>Submit answer</button>
                    </div>
                    :
                    null
                }
            </div>

            <div>
                {(num === 4) ?
                    <div className="excercise-container">
                        <div className="excercise">
                            <h2>go grab your earbuds and enjoy dancing in the rain!
                            </h2>
                        </div>
                        <div className="arctplug">
                            <h2>don&apos;t forget to wear a waterproof jacket! </h2>
                            <div>
                                <p>We highly recommend the GAMMA MX HOODY from  Arc&apos;teryx:</p>

                                <ArcteryxButton />
                            </div>
                        </div>
                        <img className="arc-image" src={ArctJacket} alt="" />

                    </div>
                    :
                    null
                }
            </div>


            <div className="Image-card">
                {(num === 0) ? <img className="side-image" src={SurveyImage2} alt="" /> : null}
                {(num === 1) ? <img className="side-image" src={SurveyImage3} alt="" /> : null}
                {(num === 2) ? <img className="side-image" src={SurveyImage} alt="" /> : null}
            </div>

        </div>
    )
}

export default PhysicalPage