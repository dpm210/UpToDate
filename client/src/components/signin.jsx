import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

function SignIn({setCurrentUser}){
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)

    document.title = "Sign In"
    
    const history = useHistory();

    async function handleSubmit(e){
     e.preventDefault()
     const user = {
     username:username,
     password
}
console.log(username)
console.log(user)

    const res = await fetch(`http://localhost:3000/signin`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
  },
    body: JSON.stringify(user)
})

    const userData = await res.json();
      if(userData.id){
        // console.log(userData)
        localStorage.setItem("user_id", userData.id)
        setCurrentUser(userData)
        history.push('/')
    }  else {
        setErrors(userData.error)
  }
};


    return(
        <div>
            <h4 className="sign-in-out">Sign In</h4>
            <form onSubmit={handleSubmit}>
            <div className="ui input">
                <input type="text" name='username' 
                value={username} 
                placeholder='Username' 
                onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <br/>
            <br/>
            <div className="ui input">
                <input type="password" name='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br/>
            <br/>
                <button className="ui violet button" type='submit'>Sign In</button>
                <p>{errors}</p>
            </form>
        </div>
    )
}

export default SignIn;