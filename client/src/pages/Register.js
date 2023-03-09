import { useState } from 'react'
import axios from "axios";
import { Navigate } from 'react-router-dom';

function Register() {


    const [name, setName] = useState('')
    const [account, setaccount] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeat_password, setrepeat_password] = useState('')
    const [navigate, setNavigate] = useState(false);
    let refreshtoken="";
    async function registerUser(event) {
        try {
            event.preventDefault()
            await axios.post('http://localhost:5000/api/register', {
                name,
                email,
                account,
                password,
                repeat_password,
            })
            .then(response =>{
                refreshtoken=response.data.refresh_token;
                localStorage.setItem("token",refreshtoken);
                setNavigate(true);
              })
        }

        catch (error) {
            alert("Something went wrong!!!");

        }
    }


    if (navigate) {
        alert('Register susscessfully');
        return <Navigate to="/manual" />;
    }


    return (
        <>
         <div className="vh-100 d-flex justify-content-center align-items-center m-2 ">
                <div className="formcontent col-md-5 p-5 m-5">
                    <h1 className="text-center mb-4">Register</h1>

                    <form onSubmit={registerUser}>

                        <div className="mb-3">
                            <label htmlFor="exampleInputname1" className="form-label ">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Name"
                                name="name"
                                required
                                className="form-control border border-primary"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputname1" className="form-label ">account No</label>
                            <input
                                value={account}
                                onChange={(e) => setaccount(e.target.value)}
                                type="text"
                                placeholder="account no."
                                name="account"
                                required
                                className="form-control border border-primary"
                            />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor="exampleInputEmail1" className="form-label ">Email</label>
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
                            <label htmlFor="exampleInputsize1" className="form-label ">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                                className="form-control border border-primary"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputsize1" className="form-label ">Conform Password</label>
                            <input
                                value={repeat_password}
                                onChange={(e) => setrepeat_password(e.target.value)}
                                type="password"
                                placeholder="repeat_password"
                                name="repeate_password"
                                required
                                className="form-control border border-primary"
                            />
                        </div>

                        <div className="d-grid">
                            <button className="btn" type="submit">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Register;