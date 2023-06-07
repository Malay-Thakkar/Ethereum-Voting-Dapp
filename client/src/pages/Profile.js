import axios from 'axios';
import React,{ useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import SideAdminbar from "../components/Sidebar/SideAdminbar";
import Sidebar from "../components/Sidebar/SideBar";



export const Profile = ({ account }) => {

    const [isadmin, setisadmin] = useState(false);
  
    useEffect(() => {
      var token = localStorage.getItem('token');
      if (token !== null) {
        var decoded = jwt_decode(token);
        var role = decoded.role;
        if ("admin" === role) {
          setisadmin(true);
        }
      }
      else {
        setisadmin(false);
      }
      //Runs only on the first render
    }, []);
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
        localStorage.removeItem('token');
        
    }




    return (
        <>
            <div className='main-container'>
            {isadmin ? <SideAdminbar />:<Sidebar />}
                <div className='col'>
                    <div className="vh-100 d-flex justify-content-center align-items-center m-4 py-3">
                        <div className="formcontent col-md-5 p-5 m-5">
                            <h1 className="text-center mb-4">Profile</h1>
                            <h5>Name: {name}</h5>
                            <h5>Email id: {email}</h5>
                            <h5>your acc no: <h6>{account}</h6></h5>
                            <h5>User id: {userid}</h5>
                            <h5>Role: {role}</h5>

                            <div className="d-grid">
                                <button className="btn" onClick={() => logout()}>Logout</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;