import React from "react";
import { useState } from "react";

const QuizComp=()=>
{
        var QuestionArr=[
            {
                Question:"What is the most famous dish in karachi?",
                AnswerArr:[
                    {Answer:"Kabab" , isCorrect: false},
                    {Answer:"Nihari" , isCorrect: false},
                    {Answer:"Biryani" , isCorrect: true},
                    {Answer:"Korma" , isCorrect: false}
                ]
            },
            {
                Question:"Who is the founder of Pakistan?",
                AnswerArr:[
                    {Answer:"Quaid-e-Azam" , isCorrect: true},
                    {Answer:"Liaqat Ali Khan" , isCorrect: false},
                    {Answer:"Nawaz Sharif" , isCorrect: false},
                    {Answer:"Imran Khan" , isCorrect: false}
                ]
            },
            {
                Question:"Which language is use for styling?",
                AnswerArr:[
                    {Answer:"HTML" , isCorrect: false},
                    {Answer:"CSS" , isCorrect: true},
                    {Answer:"Javascript" , isCorrect: false},
                    {Answer:"XML" , isCorrect: false}
                ]
            },
            {
                Question:"Which language is use for functinality?",
                AnswerArr:[
                    {Answer:"Xml" , isCorrect: false},
                    {Answer:"Css" , isCorrect: false},
                    {Answer:"JavaScript" , isCorrect: true},
                    {Answer:"Html" , isCorrect: false}
                ]
            },
            {
                Question:"BSCS field belong to..",
                AnswerArr:[
                    {Answer:"IT Field" , isCorrect: true},
                    {Answer:"Medical Field " , isCorrect: false},
                    {Answer:"Mechanical Field" , isCorrect: false},
                    {Answer:"Technician Field" , isCorrect: false}
                ]
            }
        ]
    

    const [currentQuestion, setCurrenQuestion]=useState(0)
    const [score, SetScore]=useState(0)
    const [showScore, setshowScore]=useState(false)
    const AnswerResponse=(isCorrect)=>
    {
        if(isCorrect)
        {
            SetScore(score+1)
        }

        const nextQuestion= currentQuestion+1;
        if(nextQuestion<QuestionArr.length)
        {
            setCurrenQuestion(nextQuestion)
        }
        else{
            setshowScore(true)
    }

    }

    const playAgain=()=>{
        setCurrenQuestion(0)
        SetScore(0)
        setshowScore(false)
    }



    // console.log(QuestionArr)



    return(

        <div className="app">
        
            {showScore ? (
                <div className="score-section">
                    You Have Scored {score} out of {QuestionArr.length} 
                    <>
                    <button type="submit" onClick={playAgain}>Play Again</button>
                    </>
                </div>
            ) 
           :  (
                <>
                <div className="question-section">

                    <div className="question-count">

                        <span>{currentQuestion}</span>/{QuestionArr.length}

                    </div>

                    <div className="question-text">

                        {QuestionArr[currentQuestion].Question}

                    </div>

                </div>

                <div className="answer-section">
                    {QuestionArr[currentQuestion].AnswerArr.map((answer)=>
                    (
                        <button onClick={()=>AnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                    ))}
                </div>



                </>

            )

            }
            
        </div>
    );
}

export default QuizComp;