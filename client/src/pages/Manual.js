import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import SideAdminbar from "../components/Sidebar/SideAdminbar";
import Sidebar from "../components/Sidebar/SideBar";

const Manual = () => {
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
    <div className='main-container'>
      {isadmin ? <SideAdminbar /> : <Sidebar />}
      <div className='col'>
        <div className="vh-100 d-flex justify-content-center align-items-center m-2 ">
          <div className="manual p-3 ">
            <h1 className="text-center mb-4">Manual</h1>
            {/* <h3>This user manual has been prepared to provide voters with a comprehensive understanding of the eVoting system. The manual covers accessing candidate information, casting votes, viewing election results, and managing voter profiles, all conveyed in a professional manner. in the voting area page and choose your preferred candidate or proposal. After the voting period concludes, voters can view election results on result page</h3> */}
            <h4>1. The administrator holds a pivotal role in managing the eVoting system, with access to a range of essential functions. They can select and whitelist new users, and are granted access to review voter registration information. Additionally, the administrator has the authority to view both candidate and voter information, ensuring a comprehensive understanding of the electoral landscape.</h4>
            <h4>2. Through the voting phase page, the administrator can initiate and terminate the voting process, maintaining full control over the election's timeline. Upon concluding the voting phase, the administrator can determine the winner using the 'Get Winner' page, which efficiently processes the voting data.</h4>
            <h4>3. Furthermore, the administrator is equipped with tools for analyzing the data, enabling them to gain valuable insights into the election's progress and outcomes. However, it is important to note that the administrator is not permitted to cast a vote throughout the voting process, ensuring their impartiality and preserving the integrity of the system.</h4>
            <h4>4. Lastly, the administrator can access and review their profile information, maintaining an up-to-date and accurate account of their involvement in the eVoting system.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manual