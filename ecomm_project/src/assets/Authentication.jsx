import { useState } from "react";
import styles from "./Authentication.module.css";

const Authentication = () => {
    const [toggler, setToggler] = useState(false);

    const switchModeToggler = () => {
        setToggler((prevState) => !prevState);
    };

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [cnfPass, setCnfPass] = useState("");
    const [passMatch, setPassMatch] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handlerOnPasswordMatch = (e) => {
        setCnfPass(e.target.value);
        if (e.target.value === pass) {
            setPassMatch(true);
        }
        else {
            setPassMatch(false);
        }
    };

    const handlerOnSubmitAuth = async (e) => {
        e.preventDefault();

        // console.log(mail);
        // console.log(pass);
        // console.log(cnfPass);

        setIsLoading(true);

        if (mail && pass) {
            try {
                if (!mail && !pass) {
                    throw new Error("Something went wrong");
                }

                const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNpQpJLNtGm27iuQQwCYokzWkP6cADVLI`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: mail,
                        password: pass,
                    }),
                    headers: {
                        "Content-Type": "application.json"
                    }
                });

                const data = await response.json();
                console.log("Successfully Log-In", data);
                setIsLoading(false);

            } catch (error) {
                console.log(error.message);
            }

        }
        if (pass === cnfPass) {
            try {
                if (!mail && !pass && !cnfPass) {
                    throw new Error("Please fill all the fields for signup");
                }

                const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNpQpJLNtGm27iuQQwCYokzWkP6cADVLI`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: mail,
                        password: pass,
                        returnSecureToken: true,
                    }),
                    headers: {
                        "Content-Type": "application.json"
                    }
                });

                const data = await response.json();
                console.log("Successfully Sign-Up", data);
                setIsLoading(false);

            } catch (error) {
                console.log(error.message);
            }
        }

        setMail("");
        setPass("");
        setCnfPass("");
    };

    return (
        <>
            <center className="form-signin w-50 m-auto">
                <form onSubmit={handlerOnSubmitAuth}>
                    <div className={styles.auth_form__container}>
                        <h1 className={styles.heading_sign__up}>
                            {toggler ? "sign-up" : "sign-in"}
                        </h1>

                        <div>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="name@example.com"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                            />
                        </div>
                        <br />
                        <div>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </div>
                        <br />
                        {toggler && (
                            <div>
                                <input
                                    type="password"
                                    name="confirmpassword"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    value={cnfPass}
                                    onChange={handlerOnPasswordMatch}
                                />
                            </div>
                        )}
                        <br />

                        {passMatch && <center className={styles.pass_match}> password match </center>}
                        {!passMatch && cnfPass.length > 0 && <center className={styles.pass_not__match}> password not match </center>}

                        {isLoading && <center className={styles.loading_state}> Loading... </center>}

                        {!isLoading && <button className="btn btn-primary w-100 py-2" type="submit">
                            {toggler ? "sign-up" : "sign-in"}
                        </button>}
                    </div>
                    <p className={styles.para_sign__up}>
                        {toggler ? "Already! Have an account. " : "Create an account. "}
                        <a href="#" onClick={switchModeToggler}>
                            {toggler ? "login" : "sign-up"}
                        </a>
                    </p>
                </form>
            </center>
        </>
    );
};

export default Authentication;
