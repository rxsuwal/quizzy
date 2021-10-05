import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Play = (props)=> {

    const questions = [
        {question:'Capital City of Nepal?',
            options:[
                {id:0,answer:'Kathmandu', correct:true},
                {id:1,answer:'Bhaktapur', correct:false},
                {id:2,answer:'lalitpur', correct:false},
                {id:3,answer:'kathmandu valley', correct:false},
            ]},
            {question:'Capital City of USA?',
            options:[
                {answer:'New york', correct:false},
                {answer:'washington dc', correct:true},
                {answer:'new jersy', correct:false},
                {answer:'boston', correct:false},
            ]},
            {question:'Capital City of japan?',
            options:[
                {answer:'osaka', correct:false},
                {answer:'tokyo', correct:true},
                {answer:'kyoto', correct:false},
                {answer:'koasak', correct:false},
            ]},
    ]


    const [current, setcurrent] = useState(0)
    const [score, setscore] = useState(0)

    const [optionsDisabled, setOptionsDisabled] =useState(false)
    const [nextDisabled, setNextDisabled] =useState(true)
   


    const next =()=>{
        const nextQ = current + 1;
        if(nextQ <= questions.length){
            setcurrent(nextQ)   
        }

        setNextDisabled(true)
        setOptionsDisabled(false)
      
       
    }

    const answerCheck =(correct,key)=>{
            if(correct === true){
               setscore(score + 1) 
               
            }     
            


            setNextDisabled(false)
            setOptionsDisabled(true)     
    }



    const playAgain =() =>{
        setcurrent(0)
        setscore(0)

    }

    return (
        <div>

            <div className='col-md-6 mx-auto text-center'>
            
            {props.user ? <h3>Hi, {props.user.name}</h3> : <Redirect to='/login'/>}


                {current + 1 == questions.length + 1 ?
               <div>
                   <h2>Your Score : {score}</h2>
                   <button onClick={playAgain} className='btn btn-dark rounded-0'>Play Again</button>
               </div> :
               <div className=''>
                   <h6>Question {current + 1}/{questions.length}</h6>
                   {/* question */}
                   <h3>{questions[current].question}</h3>

                    {/* ANSWERS */}
                   <div>
                       {questions[current].options.map((option) => {
                            return <button disabled={optionsDisabled} key={option.id}
                                          onClick={()=>answerCheck(option.correct, option.id)} 
                                            className='btn btn-light border col-md-4 m-2 text-capitalize rounded-0'>{option.answer}</button>
                       })}
                        
                   </div>

                  

                   <button onClick={next} disabled={nextDisabled} className='btn btn-warning  rounded-0'>Next</button>
               </div>
}

            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        user:state.reducer.user,
    }
}

export default connect(mapStateToProps)(Play)
