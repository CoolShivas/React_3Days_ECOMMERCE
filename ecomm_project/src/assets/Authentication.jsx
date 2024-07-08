import { useState } from "react";
import styles from "./Authentication.module.css";

const Authentication = () => {

    const [toggler, setToggler] = useState(true);

    const switchModeToggler = () => {
        setToggler((prevState) => !prevState);
    };

    return (
        <>
            <center className="form-signin w-50 m-auto">
                <form>

                    <div className={styles.auth_form__container} >
                        <h1 className={styles.heading_sign__up}> {toggler ? "sign-up" : "sign-in"} </h1>

                        <div>
                            <input type="email" className="form-control" placeholder="name@example.com" />
                        </div>
                        <br />
                        <div>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <br />
                        {toggler && <div>
                            <input type="password" className="form-control" placeholder="Confirm Password" />
                        </div>}
                        <br />
                        <button className="btn btn-primary w-100 py-2" type="submit">  {toggler ? "sign-up" : "sign-in"} </button>
                    </div>
                    <p className={styles.para_sign__up}> {toggler ? "Already! Have an account." : "Create an account"} <a href="#" onClick={switchModeToggler}> {toggler ? "login" : "sign-up"} </a> </p>
                </form>
            </center>
        </>
    )
}

export default Authentication;