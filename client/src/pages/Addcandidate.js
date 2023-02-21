import React, { useState } from "react";
import '../App.css';

import {registerCandidates} from '../web3_functions'

const Addcandidate = ({ account, contractInstance }) => {

  const [candidateName, setCandidateName] = useState();
  const [candidateAddress, setCandidatAddress] = useState();
  const [candidateAge, setCandidateAge] = useState();
  // const [candidateParty, setcandidateParty] = useState();
  // const [candidateEducation, setcandidateEducation] = useState();

  async function register_candidate(){
    console.log("name:", candidateName);
    console.log("age:", candidateAge);
    console.log("add:", candidateAddress);
    console.log("acc", account);
    console.log("contract", contractInstance);
    let result = await registerCandidates(contractInstance, account, candidateName, candidateAge, candidateAddress);
    console.log("result:", result);
}

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center m-2 ">
        <div className="formcontent col-md-5 p-5 m-5">
          <h1 className="text-center mb-4">Add candidate</h1>
          {/* <form> */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Candidate Name</label>
              <input
                onChange={(e) => setCandidateName(e.target.value)}
                type="text"
                placeholder="Name"
                name="name"
                required
                className="form-control border border-dark"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Candidate Address</label>
              <input
                onChange={(e) => setCandidatAddress(e.target.value)}
                type="text"
                placeholder="Address"
                name="address"
                required
                className="form-control border border-dark"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Candidate Age</label>
              <input
                onChange={(e) => setCandidateAge(e.target.value)}
                type="text"
                placeholder="age"
                name="age"
                required
                className="form-control border border-dark"
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Candidate Party</label>
              <input
                onChange={(e) => setcandidateParty(e.target.value)}
                type="text"
                placeholder="Party Name"
                name="party"
                required
                className="form-control border border-dark"
              />
            </div> 
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Candidate Education</label>
              <input
                onChange={(e) => setcandidateEducation(e.target.value)}
                type="text"
                placeholder="Education"
                name="education"
                required
                className="form-control border border-dark"
              />
            </div>
            */}

            <div className="d-grid">
              <button className="btn"  onClick={register_candidate} >Add</button>
            </div>
          {/* </form> */}
        </div>
      </div>

    </>
  )
}

export default Addcandidate