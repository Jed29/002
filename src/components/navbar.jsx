import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Navbar() {
    let history = useHistory()
    
    function loginPage(){
        history.push('/login')
    }

    function registerPage(){
        history.push('/register')
    }

    return (
        <>
            <div className="container bg-green-500 flex p-2">
                <div onClick={()=>{loginPage()}} className="header-left p-4 cursor-pointer">
                    <h1> Login </h1>
                </div>
                <div onClick={()=>{registerPage()}} className="header-left p-4 cursor-pointer">
                    <h1> Register </h1>
                </div>
            </div>
        </>
    )
}
