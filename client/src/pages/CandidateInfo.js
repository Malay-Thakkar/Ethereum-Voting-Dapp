import React, {useState, useEffect} from 'react';
import {getAllCandidate} from '../web3_functions'
import jwt_decode from "jwt-decode";
import SideAdminbar from "../components/Sidebar/SideAdminbar";
import Sidebar from "../components/Sidebar/SideBar";

const CandidateInfo = ({ account, contractInstance }) => {
  const [totalCandidate, setTotalCandidate] = useState([]);
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


  useEffect(() => {
    async function connect() {
        const arr = await getAllCandidate(contractInstance, account)
        setTotalCandidate(arr.message)
    }
    setTimeout(connect, 1500);
  }, [account, contractInstance])

  return (
    <div className='main-container'>
       {isadmin ? <SideAdminbar />:<Sidebar />}
      <div className='col m-5'>
        <h1 style={{textAlign:"center"}}>Candidate Info</h1>
        {/* {totalCandidate.map((candidate) => {
            return (
              <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
                <div className="col gap-1 m-2 m-2">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{candidate.name} </h5>
                      <p className="card-text">{candidate.age}<br />
                        {candidate.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        } */}
      </div>
    </div>
  )
}

export default CandidateInfo;





  




       

