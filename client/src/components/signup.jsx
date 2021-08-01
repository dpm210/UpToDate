
function SignUp (){

    
    return(
        <div>
        <h4 className="sign-in-out">Sign Up</h4>
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
             <button className="ui violet button" type='submit'>Sign Up</button>
         </form>
    </div>
  )
}







export default SignUp;
 