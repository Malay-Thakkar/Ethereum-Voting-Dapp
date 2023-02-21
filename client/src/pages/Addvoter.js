import React, { useState } from 'react'

import {whiteListAddress} from '../web3_functions'

const Addvoter = ({ account, contractInstance }) => {
  // const [voterName, setvoterName] = useState();
  const [voterAddress, setvoterAddress] = useState();
  // const [voterAge, setvoterAge] = useState();

  async function register_voter(){
    let result = await whiteListAddress(contractInstance, account, voterAddress);
    console.log("result:", result);
}

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center m-2 ">
        <div className="formcontent col-md-5 p-5 m-5">
          <h1 className="text-center mb-4">Voter Registration</h1>

          {/* <form > */}

            {/* <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">voter Name</label>
              <input
                onChange={(e) => setvoterName(e.target.value)}
                type="text"
                placeholder="Name"
                name="name"
                required
                className="form-control border border-dark"
              />
            </div> */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">voter Address</label>
              <input
                onChange={(e) => setvoterAddress(e.target.value)}
                type="text"
                placeholder="Address"
                name="address"
                required
                className="form-control border border-dark"
              />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">voter Age</label>
              <input
                onChange={(e) => setvoterAge(e.target.value)}
                type="text"
                placeholder="age"
                name="age"
                required
                className="form-control border border-dark"
              />
            </div> */}
            <div className="d-grid">
              <button className="btn" onClick={register_voter}>Add</button>
            </div>

          {/* </form> */}
        </div>
      </div>
    </>
  )
}

export default Addvoter