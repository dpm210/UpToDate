

function SignIn (){
    return(
        <div>
            <h4 className="sign-in-out">Sign In</h4>
            <form>
            <div className="ui input">
                <input type="text" name='username' placeholder='Username'/>
            </div>
            <br/>
            <br/>
            <div className="ui input">
                <input type="text" name='password' placeholder='Password'/>
            </div>
            <br/>
            <br/>
                <button className="ui violet button" type='submit'>Sign In</button>
            </form>
        </div>
    )
}







export default SignIn;
 