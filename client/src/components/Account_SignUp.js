import React from 'react'
import './css/Account_Signup.css'

const AccountSignup = () => {
    return (
        <div className="container bodyContainer">
            <h1>Sign Up for Vendible:</h1>
            <form action="/user/signup" method="POST" className="signupContainer">
                <div className="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" className="form-control" name="first_name" required/>
                </div>
                <div className="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" className="form-control" name="last_name" required/>
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" required/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" name="password" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default AccountSignup