import React from 'react'
import * as style from './Register.module.css'
import { useState } from 'react'
import { connect } from 'react-redux'

import * as actionCreator from '../../store/actionCreators'
import { Redirect } from 'react-router'

const Register =(props)=> {
    const [details, setDetails] = useState({
        name:'',
        email:'',
        password:'',
      
    })

   
   
    const inputOnChange = (e)=>{

        const value = e.target.value;
        const name =e.target.name;
        
        setDetails((prevValue)=>{
            if(name === "name"){
                return{
                    name : value,
                email:prevValue.email,
                password:prevValue.password,
                err:prevValue.err
                }
            }
            else if(name === "email"){
            
                return{
                    name: prevValue.name,
                email: value,
                password : prevValue.password,
                }
                
            }
            else if(name === "password"){
                return{
                    name: prevValue.name,
                    email: prevValue.email,
                    password : value,

                }
            }
        })

        
    }

    const userData =()=>{
        return{
            name : details.name,
            email:details.email,
            password:details.password
        }
    }

    return (


        <div className={style.register}>

            {props.user ? <Redirect to='/login'/> : null}

            <form className='col-md-6 mx-auto'>
                         <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input value={details.name} name='name' onChange={inputOnChange} type="text" class="form-control rounded-0" id="exampleInputName" aria-describedby="emailHelp"/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input value={details.email} name='email' type="email" onChange={inputOnChange} class="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <small className='text-danger'>{details.err}</small>
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input value={details.password} name='password' onChange={inputOnChange} type="password" class="form-control rounded-0" id="exampleInputPassword1"/>
                            </div>
                        
                            <button type="submit" class="btn btn-dark rounded-0" onClick={()=>props.signUp(userData())}>Register</button>
                </form>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        user:state.reducer.user,
    }
}
const mapDispatchToProps =dispatch=>{

    return{
        signUp:(payload)=>dispatch(actionCreator.signUp(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)
