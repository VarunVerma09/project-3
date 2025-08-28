import React, { useState } from 'react';

const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userData = {}


    const formData = (e) => {
        e.preventDefault(); // prevent refresh

        if (name === "" || email === "" || password === "") {
            return alert("kdcjbejbfclbe");
        } else {
            const userData = {
                name: name,
                email: email,
                password: password,
            };

            console.log("User Data Saved:", userData);
            setName("")
            setEmail("")
            setPassword("")
        
    }
    }


    return (

        <div className="container">
            <div className="form-container d-flex">


                <div className="form-left col-6">
                    <h2>Welcome Back!</h2>
                    <p>To keep connected with us please login with your personal info</p>
                    <button className="btn btn-light rounded-pill px-4">SIGN IN</button>
                </div>


                <div className="form-right col-6">
                    <h3 className="fw-bold mb-3" >Create Account</h3>
                    <div className="d-flex gap-2 mb-3">
                        <button className="btn btn-outline-dark btn-sm rounded-circle"><i className="bi bi-facebook"></i></button>
                        <button className="btn btn-outline-dark btn-sm rounded-circle"><i className="bi bi-google"></i></button>
                        <button className="btn btn-outline-dark btn-sm rounded-circle"><i className="bi bi-linkedin"></i></button>
                    </div>
                    <p className="text-muted">or use your email for registration</p>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control"
                                value={name}

                                onChange={(e) => {
                                    setName(e.target.value)

                                }}
                                placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)

                                }}
                                className="form-control" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)

                                }} className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" onClick={formData} className="btn-custom w-100">SIGN UP</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;
