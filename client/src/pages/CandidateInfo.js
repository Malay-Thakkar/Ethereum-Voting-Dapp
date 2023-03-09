import React,{ useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import SideAdminbar from "../components/Sidebar/SideAdminbar";
import Sidebar from "../components/Sidebar/SideBar";

const CandidateInfo = () => {
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
        <div>CandidateInfo</div>
      </div>
    </div>
  )
}

export default CandidateInfo