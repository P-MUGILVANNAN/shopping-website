import React from 'react'
import './CreateAccount.css'

export const CreateAccount = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="text"><h1>Create Account</h1></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="First name" placeholder='  First name' />
                </div>
                <div className="input">
                    <input type="Last name" placeholder='  Last name' />
                </div>
                <div className="input">
                    <input type="email" placeholder='  Email'/>
                </div>
                <div className="input">
                    <input type="password" placeholder='  Password'/>
                </div>
            </div>
            <div className="button">
            <div className="submit">Create</div>
            </div>
        </div>
    );
}

