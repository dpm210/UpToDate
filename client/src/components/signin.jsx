import {useHistory} from 'react-router-dom'
import React, {useState} from 'react';
// import {Input, Form} from './styled';


// function SignIn (){

    function SignIn({setCurrentUser}){
        const [username, setUserName] = useState('')
        const [password, setPassword] = useState('')
        const [errors, setErrors] = useState(null)

        const history = useHistory();

        async function handleSubmit(e){
            e.preventDefault()
            const user = {
                user_name:username,
                password
            }
            const res = await fetch(`http://localhost:3000/log_in`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user})
            });
            const userData = await res.json();
            if(userData.id){
                console.log(userData)
                setCurrentUser(userData)
                history.push('/')
            } else {
                setErrors(userData.message)
            }

        };

    return(
        <div>
            <h4 className="sign-in-out">Sign In</h4>
            <form onSubmit={handleSubmit}>
            <div className="ui input">
                <input type="text" name='username' value={username} placeholder='Username' onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <br/>
            <br/>
            <div className="ui input">
                <input type="text" name='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br/>
            <br/>
                <button className="ui violet button" type='submit'>Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;