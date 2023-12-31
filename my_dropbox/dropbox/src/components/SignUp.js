import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import Home from "./Home";
import "./Register.css"
function SignUp() {
    const [isAuth, setIsAuth] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleClick = () => {
        createUserWithEmailAndPassword(auth, email, password).then((data) => {
            setIsAuth(data.user.email)
            localStorage.setItem("email", data.user.email)
        }).catch(err => alert(err.message))
    }

    useEffect(() => {
        setIsAuth(localStorage.getItem('email'))
    }, [])

    return (
        <div className="">
            {isAuth ? <Home /> :
                <div className="d-flex justify-content-center align-items-center h-100vh">
                    <div className="d-flex w-75 justify-content-center">
                        <div className="w-50">
                            <img src="./dropbox.jpg" className="images" alt="" />
                        </div>
                        <div class="w-50 ">

                            <h1 className="text-center mb-4">
                                <img className="logo" src="https://static-00.iconduck.com/assets.00/dropbox-icon-2048x2048-rjt8u5st.png" alt="" />
                                Register
                            </h1>
                            <div class="input-container form-floating mb-3">

                                <input type="email" onChange={e => setEmail(e.target.value)} required id="floatingInput" />

                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="input-container form-floating">
                                <input type="password" onChange={e => setPassword(e.target.value)} required id="floatingPassword" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="input-container form-floating">
                                <input type="password" onChange={e => setPassword(e.target.value)} required id="floatingPassword" />
                                <label for="floatingPassword">Repeat password</label>
                            </div>
                            <div class="d-grid gap-2 mt-4">
                                <button class="btn btn-primary" type="button" onClick={handleClick}>Sign In</button>
                            </div>
                            <p className="link text-center ">to <Link to="/signin">Login</Link></p>
                        </div>
                    </div>
                </div>}
        </div>
    );
}
export default SignUp;
