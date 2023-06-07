import React, {useState, useEffect} from 'react';
import {getAllCandidate, putVote, votingStarted} from '../web3_functions'
import jwt_decode from "jwt-decode";
import SideAdminbar from "../components/Sidebar/SideAdminbar";
import Sidebar from "../components/Sidebar/SideBar";

const Voting = ({ account, contractInstance }) => {
  const [totalCandidate, setTotalCandidate] = useState([]);
  const [votingStatus, setVotingStatus] = useState(false);
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
      const status = await votingStarted(contractInstance, account)
      if (status.message) {
        const arr = await getAllCandidate(contractInstance, account)
        setTotalCandidate(arr.message)
        setVotingStatus(true)
      }
    }
    setTimeout(connect, 1500);
  }, [account, contractInstance])


  async function vote(candidate) {
    let result = await putVote(contractInstance, account, candidate.candidateAddress);
    console.log("result:", result);
  }


  return (
    <>
      <div>
      <div className='main-container'>
      {isadmin ? <SideAdminbar />:<Sidebar />}
      <div className='col'>
      <h1 style={{textAlign:"center"}}>Voting area</h1>
        {votingStatus === false ?
          <>
            <h2>Voting not started yet !!</h2>
          </>
          :
          totalCandidate.map((candidate) => {
            return (
              <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
                <div className="col gap-1 m-2 m-2">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{candidate.name} </h5>
                      <p className="card-text">{candidate.age}<br />
                        {candidate.address}</p>
                    </div>
                  {isadmin ?null:  <button onClick={(e) => vote(candidate)}>Vote</button>}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
    </>
  )
}

export default Voting;