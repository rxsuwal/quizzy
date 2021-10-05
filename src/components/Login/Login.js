import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as style from './Login.module.css'
import { useState } from 'react'
import { Redirect } from 'react-router'

const Login =(props)=> {
    const [credential, setcredential] = useState({
        email:null,
        password:null
    })

    const [auth, setAuth]= useState(false)

    const inputOnchange =(e)=>{
        let value = e.target.value
        let name = e.target.name

        setcredential((prevValue)=>{
            if(name === 'email'){
                return{
                    email:value,
                    password:prevValue.password
                }
            }else if(name === 'password'){
                return{
                    email:prevValue.email,
                    password:value
                }
            }
        })

    }

    
    const signIn=(e)=>{
        
            if(props.user == null){
                alert('No Registration Found ! Register Yourself First')
            }else if(credential.email !== props.user.email  || credential.password !== props.user.password){
                alert('Email or Password Wrong')
            }else if(credential.email == props.user.email  && credential.password == props.user.password){
                setAuth(true)
            }else{
                alert('Something went wrong !')
            }
    }
    return (
        <div className='row text-center'>
            
                {auth ? <Redirect to='/play'/> : null}
            <div className='col-md-6 col-sm-8 m-auto'>
                {props.user ? <form >
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" name='email' onChange={inputOnchange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" name='password' onChange={inputOnchange} class="form-control" id="exampleInputPassword1"/>
                            </div>
                        
                            <div type="submit" onClick={signIn} class="btn btn-primary ">Login</div>
                           
                            
                </form> : null}

                {props.user ? null : <Link to='/register'  className='btn btn-dark text-center'>Register</Link>}


            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        user:state.reducer.user
    }
}



export default connect(mapStateToProps,null)(Login)
