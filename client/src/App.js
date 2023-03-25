import "./App.css";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { connectWeb3Metamask } from './web3_functions'

import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Result from './pages/Result'
import Analysis from "./pages/Analysis";
import Manual from "./pages/Manual";
import Voting from "./pages/Voting"
import Error from './pages/Error';
import Footer from "./components/Footer"
import Addvoter from "./pages/Addvoter";
import Addcandidate from "./pages/Addcandidate";
import VotingPhase from "./pages/VotingPhase";
import CandidateInfo from "./pages/CandidateInfo";
import VoterInfo from "./pages/VoterInfo";
function App() {
  const [isadmin, setisadmin] = useState(false);
  const [contractInstance, setContract] = useState(null)
  const [accounts, setAccounts] = useState()

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
      try {
        let { accounts, instance } = await connectWeb3Metamask();
        setAccounts(accounts);
        setContract(instance);
      } catch (error) {
        // -32002 error code means metamask is trying to take permission
        if (error.code !== -32002) {
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
        }
        console.log(error);
      }
    }
    setTimeout(connect, 1500);
  }, [])


  return (
    <Router>
    
      {contractInstance == null ?
        <>
          <h2 style={{ textAlign: "center" }}> Loading Application connect metamsk account...</h2>
        </> :
        <Routes>
          {isadmin ? <Route path="/addcandidate" element={<Addcandidate contractInstance={contractInstance} account={accounts[0]} />} /> : null}
          {isadmin ? <Route path="/addvoter" element={<Addvoter contractInstance={contractInstance} account={accounts[0]} />} /> : null}
          {isadmin ? <Route path="/phase" element={<VotingPhase contractInstance={contractInstance} account={accounts[0]} />} /> : null}
          {isadmin ? <Route path="/voterinfo" element={<VoterInfo contractInstance={contractInstance} account={accounts[0]} />} /> : null}
          {isadmin ? <Route path="/getwinner" element={<Result contractInstance={contractInstance} account={accounts[0]} />} /> : null}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" onEnter={() => localStorage.removeItem('token')} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/voting" element={<Voting contractInstance={contractInstance} account={accounts[0]} />} />
          <Route path="/me" element={<Profile contractInstance={contractInstance} account={accounts[0]} />} />
          <Route path="/candidateinfo" element={<CandidateInfo />} />
          <Route path="*" element={<Error />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      }
      <Footer />
    </Router>

  );
}

export default App;
