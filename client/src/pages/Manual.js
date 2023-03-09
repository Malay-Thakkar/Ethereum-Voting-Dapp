import React,{ useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import SideAdminbar from "../components/Sidebar/SideAdminbar";
import Sidebar from "../components/Sidebar/SideBar";

const Manual = () => {
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
  return (
    <div className='main-container'>
       {isadmin ? <SideAdminbar />:<Sidebar />}
      <div className='col'>
        <div className="vh-100 d-flex justify-content-center align-items-center m-2 ">
          <div className="manual p-3 ">
            <h1 className="text-center mb-4">Manual</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente esse aliquid sit possimus alias culpa ad sunt recusandae velit molestiae minima saepe incidunt, explicabo iusto nam minus quidem beatae.</h2>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente esse aliquid sit possimus alias culpa ad sunt recusandae velit molestiae minima saepe incidunt, explicabo iusto nam minus quidem beatae.</h2>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente esse aliquid sit possimus alias culpa ad sunt recusandae velit molestiae minima saepe incidunt, explicabo iusto nam minus quidem beatae.</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manual