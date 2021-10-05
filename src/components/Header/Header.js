import React from 'react'
import { Link } from 'react-router-dom'
import * as style from './Header.module.css'

function Header() {
    return (
        <header className='w-100 text-center my-5 '>
            <Link to='/' className='text-decoration-none fs-1 fst-italic text-danger'>Quizzy</Link>
        </header>
    )
}

export default Header
