import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);
    let refreshtoken = "";
    async function handleSubmit(event) {
        try {
            event.preventDefault()
            // let result = 
            await axios.post('http://localhost:5000/api/login', {
                email,
                password,
            })
                .then(response => {
                    refreshtoken = response.data.refresh_token;
                    localStorage.setItem("token", refreshtoken);
                    setNavigate(true);

                })
        }



        catch (error) {
            console.log(error);
            alert("invalid user!!!");

        }
    }

    if (navigate) {
        alert('Login susscessfully');
        return <Navigate to="/me" />;
    }

    return (
        <>
            <div className="vh-100 d-flex justify-content-center align-items-center m-2 ">
                <div className="formcontent col-md-5 p-5 m-5">
                    <h1 className="text-center mb-4">Login</h1>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="youremail@gmail.com"
                                name="email"
                                required
                                className="form-control border border-primary"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="********"
                                name="password"
                                required
                                className="form-control border border-primary"
                            />
                        </div>
                        <p className="small"><Link to="/forget-password">Forgot password?</Link></p>
                        <div className="d-grid">
                            <button className="btn" type="submit">Login</button>
                        </div>
                    </form>
                    <div className="mt-3">
                        <p className="mb-0  text-center">Don't have an account? <Link to="/register"
                            className="fw-bold">SignUp</Link></p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login;