import React from 'react';
import { startVoting, stopVoting } from '../web3_functions'
import SideAdminbar from "../components/Sidebar/SideAdminbar";

const VotingPhase = ({ account, contractInstance }) => {
  async function start_voting() {
    let result = await startVoting(contractInstance, account);
    console.log("result:", result);
  }


  async function stop_voting() {
    let result = await stopVoting(contractInstance, account);
    console.log("result:", result);
  }
  return (
    <>
      <div className='main-container'>
        <SideAdminbar />
        <div className='col m-5'>
          <h1 style={{ textAlign: "center" }}>Voting phase</h1>
          <div className="vh-100 d-flex justify-content-center align-items-center m-2 ">
            <div className="formcontent col-md-5 p-1 m-5">
              <div className="row row-cols-1 row-cols-md-3 g-5 m-5">
                <div className="col gap-3 m-2">
                  <div className="card">
                    <div className="card-body">
                      <button variant="contained" className="vphase" onClick={start_voting}>Start Voting</button>
                      <button variant="contained" className="vphase" onClick={stop_voting}>Stop Voting</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VotingPhase;