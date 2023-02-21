import "./App.css";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import SideBar from "./components/Sidebar/SideBar";
import SideAdminbar from './components/Sidebar/SideAdminbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

import { connectWeb3Metamask } from './web3_functions'

function App() {
  const [isadmin, setisadmin] = useState(false);
  const [isuser, setisuser] = useState(false);
  const token = localStorage.getItem('token');


  var decoded = jwt_decode(token);
  let role = decoded.role;
  console.log(role);
  const [contractInstance, setContract] = useState(null)
  const [accounts, setAccounts] = useState()

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

  useEffect(() => {
    if ("admin" === role) {
      setisadmin(true);
    }
    else if ("customer" === role) {
      setisuser(true);
    }

    //Runs only on the first render
  }, [role]);
  return (
    <>
      {Route === "/" || Route === "/register" ?
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router> :
        <>
        { contractInstance == null ?
          <>
            <h2 style={{ textAlign: "center" }}> Loading Application </h2>
          </> :
          <Router>
            {isadmin ? <SideAdminbar>
              <Routes>
                {isadmin ? <Route path="/addcandidate" element={<Addcandidate contractInstance={contractInstance} account={accounts[0]} />} /> : null}
                {isadmin ? <Route path="/addvoter" element={<Addvoter contractInstance={contractInstance} account={accounts[0]} />} /> : null}
                {isadmin ? <Route path="/phase" element={<VotingPhase contractInstance={contractInstance} account={accounts[0]} />} /> : null}
                {isadmin ? <Route path="/voterinfo" element={<VoterInfo contractInstance={contractInstance} account={accounts[0]} />} /> : null}
                <Route path="/candidateinfo" element={<CandidateInfo contractInstance={contractInstance} account={accounts[0]} />} />
                <Route path="/manual" element={<Manual />} />
                <Route path="/me" element={<Profile contractInstance={contractInstance} account={accounts[0]} />} />
                <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </SideAdminbar> : null}


            {isuser ? <SideBar>
              <Routes>
                {isuser ? <Route path="/voting" element={<Voting contractInstance={contractInstance} account={accounts[0]} />} /> : null}
                {isuser ? <Route path="/analysis" element={<Analysis />} /> : null}
                {isuser ? <Route path="/result" element={<Result contractInstance={contractInstance} account={accounts[0]} />} /> : null}
                <Route path="/manual" element={<Manual />} />
                <Route path="/candidateinfo" element={<CandidateInfo contractInstance={contractInstance} account={accounts[0]} />} />
                <Route path="/me" element={<Profile contractInstance={contractInstance} account={accounts[0]} />} />
                <Route path="/addvoter" element={<Addvoter contractInstance={contractInstance} account={accounts[0]} />} />
                <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </SideBar> : null}
            <Footer />

          </Router>
      }
      </>
    }
    </>
  );
}

export default App;
