import React from 'react';
import {startVoting, stopVoting} from '../web3_functions'

const VotingPhase = ({account, contractInstance}) => {
  async function start_voting(){
    let result = await startVoting(contractInstance, account);
    console.log("result:", result);
}


async function stop_voting(){
    let result = await stopVoting(contractInstance, account);
    console.log("result:", result);
}
  return (
    <>
      <div>VotingPhase</div>
      <button variant="contained" onClick={start_voting}>Start Voting</button>
      <button variant="contained" onClick={stop_voting}>Stop Voting</button>
    </>
  )
}

export default VotingPhase;