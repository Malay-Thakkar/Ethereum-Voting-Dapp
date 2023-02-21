import React,{useState} from 'react'
import { getWinner } from '../web3_functions'

const Result = ({ account, contractInstance }) => {
  const [winnerAddress, setWinnerAddress] = useState();
  async function get_Winner() {
    let { message } = await getWinner(contractInstance, account);
    console.log("result:", message);
    setWinnerAddress(message.name)
  }
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center m-2 ">
      <div className="formcontent col-md-5 p-5 m-5">
        <h1 className="text-center mb-4">Result</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
          <div className="col gap-1 m-2 m-2">
            <div className="card">
              <div className="card-body">
                <p className="card-text">{winnerAddress}</p>
              </div>
              <button onClick={get_Winner}>Get Wineer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result