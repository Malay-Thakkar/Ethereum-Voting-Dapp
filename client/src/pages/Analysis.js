import React,{ useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import SideAdminbar from "../components/Sidebar/SideAdminbar";
import Sidebar from "../components/Sidebar/SideBar";

const Analysis = () => {
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
    <>
    <div className='main-container'>
    {isadmin ? <SideAdminbar />:<Sidebar />}
        <div className='col'>
    <img src={"https://imgs.search.brave.com/AjapEpV7vGYvu_qrxeq_a2VEAiok2a04p2kC4z4IDmw/rs:fit:1200:1180:1/g:ce/aHR0cHM6Ly9taXJv/Lm1lZGl1bS5jb20v/bWF4LzMxODAvMSpm/LUh0MWphOTl6YUdX/c25RdDRGb2pnLnBu/Zw"} class="card-img-top" alt="..." />
    </div>
    </div>
    </>
  );
};


export default Analysis