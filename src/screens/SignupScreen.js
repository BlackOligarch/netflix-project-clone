import React, {useRef} from "react";
import "./SignupScreen.css";


function SignupScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);



  return (
    <div className="signupScreen">
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef} placeholder="Password" type="password" />
            <button type="submit">
                Sign In
            </button>

            <h4>
                <span className="signupScreen__gray" >New to Netflix? </span>
                <span className="signupScreen__link" >Sign Up now. </span>
            </h4>
        </form> 

    </div>
  );
}

export default SignupScreen;