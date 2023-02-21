import React, { useState } from "react";
import axios from 'axios';




export const Profile = ({ account}) => {

    const token = localStorage.getItem('token');
    const api = 'http://localhost:5000/api/me';
    const apilogout = 'http://localhost:5000/api/logout';
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [role, setrole] = useState('');
    const [userid, setuserid] = useState('');


    axios.get(`${api}`, {
        headers: {
            'Authorization': `bearer ${token}`
        }
    })
        .then((res) => {
            setname(res.data.name);
            setuserid(res.data._id);
            setrole(res.data.role);
            setemail(res.data.email);
        })
        .catch((error) => {
            console.error(error)
        })

    const logout = () => {
        axios.post(`${apilogout}`, {
            headers: {
                'Authorization': `bearer ${token}`
            },
            data: {
                "refresh_token": `${token}`
            }

        })
            .then((res) => {
                alert("logout");
            })
            .catch((error) => {
                console.error(error)
                console.log("logout");
            })
    }




    return (
        <>

            <div className="vh-100 d-flex justify-content-center align-items-center m-4 py-3">
                <div className="formcontent col-md-5 p-5 m-5">
                    <h1 className="text-center mb-4">Profile</h1>
                    <h5>Name: {name}</h5>
                    <h5>Email id: {email}</h5>
                    <h5>your acc no: {account}</h5>
                    <h5>User id: {userid}</h5>
                    <h5>Role: {role}</h5>

                    <div className="d-grid">
                        <button className="btn" onClick={() => logout()}>Logout</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile;