import {useState} from "react";
import {useUserContext} from "../Context/userContext.jsx";

const LoginForm = () => {
    // input state values always need to be strings - empty initially
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [submitResult, setSubmitResult] = useState("");
    // destructure the context values passed via UserProvider
    const {currentUser, handleUpdateUser} = useUserContext();
    // destructure theme context
    // to use this context in a component, first employ useContext hook
    // const { theme } = useContext(MyThemeContext);
    // alternative using the useContext hook directly, either works
    //const {currentUser, handleUpdateUser} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPassword === "user" && userEmail === "user@gmail.com") {
            setSubmitResult("Successful login.");
            handleUpdateUser({email: userEmail}); // context function
        } else {
            setSubmitResult("Invalid login/password");
        }
    };

    /* if the user is already logged in, show msg instead of form */
    if (currentUser)
        return (
            <>
                <p>Welcome {currentUser.email}!</p>
                <button onClick={() => handleUpdateUser(undefined)}>Log Out</button>
            </>
        );
    return (
        <>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="formRow">
                            <label>
                                Email Address:
                                <br/>
                                {/* Controlled form element needs both value and onChange.
                                onChange handler uses event param e to access target value.
                                   Whenever user types, new value is stored in state. */}
                                <input
                                    type="email"
                                    value={userEmail}
                                    name="userEmail"
                                    onChange={(e) => setUserEmail(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="formRow">
                            <label>
                                Password:
                                <br/>
                                <input
                                    type="password"
                                    value={userPassword}
                                    name="password"
                                    onChange={(e) => setUserPassword(e.target.value)}
                                />
                            </label>
                        </div>
                        {/* same form code as previously, BUT now includes
                        <form> and <button> */}
                        <br/>
                        <button>Log In</button>
                        <p>{submitResult}</p>
                    </form>
                </div>
            </div>
        </>
    );
}

// try removing the onChange prop and typing in a field
export default LoginForm;