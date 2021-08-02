import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

function SignUp({setCurrentUser}){
const [newUser, setNewUser] = useState("")
const [newPassword, setNewPassword] = useState('')
const [signUpErrors, setSignUpErrors] = useState([])

const history = useHistory();

function usernameSubmit(e){
    setNewUser(e.target.value)
}
function userPasswordSubmit(e){
    setNewPassword(e.target.value)
}

function handleSignUp(e){
    e.preventDefault()
    const signUpUser = {
    "username": newUser,
    "password": newPassword
}
// console.log(signUpUser);
    console.log(signUpErrors);
    // console.log(data)

fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' 
    },
    body: JSON.stringify(signUpUser),
})
    .then((res) => res.json())
    .then((data) => {
        if(data.errors) {
        setSignUpErrors(data.errors);
    } else {
        history.push('/')
    }
   
  });
}
// console.log(newUser);
// console.log(newPassword);

    return(
        <div>
        <h4 className="sign-in-out">Sign Up</h4>
            <form onSubmit={handleSignUp}>
            <div className="ui input">
                <input onChange={usernameSubmit} type="text" name='username' value={newUser} placeholder='Username'/>
            </div>
            <br/>
            <br/>
            <div className="ui input">
                <input onChange={userPasswordSubmit} type="password" name='password' value={newPassword} placeholder='Password'/>
            </div>
            <br/>
            <br/>
             <button className="ui violet button" type='submit'>Sign Up</button>
         </form>
    </div>
 )
}


export default SignUp;
 