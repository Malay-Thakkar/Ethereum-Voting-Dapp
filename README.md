# Ethereum-Voting-Dapp

Research project: E-voting system using blockchain. 

This research project focuses on enhancing the fundamental voting process in our society by implementing an E-Voting system using blockchain technology. The implementation of a decentralized application (DApp) ensures confidentiality, integrity, and availability. As a result, a tamper-proof and transparent voting mechanism is achieved. With the ability to prevent double voting, enable secure remote voting, and enhance public trust in elections, the DApp offers full administrative control to authorized administrators, allowing them to efficiently manage candidates, voters, and voting phases.

• It is an Ethereum-based Decentralize application.

• It achieves basic security principles of Confidentiality, Integrity, and availability. 

• Easy to use and provide a better user experience. 

• Utilized responsive design to ensure compatibility across all devices. 

• Tested and developed in the local Ethereum network.


USER MANUAL
 
Step-1 Clone git repository:

Command: git clone https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp.git

![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/87588dc9-60dd-4d99-8d28-bf49509d9dfb)

 (Fig.9.1 Implementation)
 
Step-2 truffle integration.

Open in vs code

follow the command to start a project: 
cd .\contract\

truffle compile

truffle migrate --reset

![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/a8c916b8-dc49-4801-9e41-4a05fa7bc987) 
![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/46938e67-4f67-4f83-b7ca-648bc6fb9e84)

(Fig.9.2 Implementation)

That generates Voting.json file in the build folder that is put in the following path: \client\src


Step-3 Frontend Start

For Frontend Start follow the command:

cd .\client\

npm install

npm start

 ![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/59f9bba5-f0e0-4bf9-a0f1-807f04e14101)
 
(Fig.9.3 Implementation)

Step-4 Backend Start

For the Backend(server) Start to follow the command:
cd .\server\

npm install

npm start

 ![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/14f64e11-df9d-4c9d-a524-9a15ef46f612)

(Fig.9.4 Implementation)


7. 	Implementation 

User module(Admin and voter both)

In this first, we have to log in through Metamask.

 ![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/10c75a6d-8c1b-4f83-bc40-115181b6bf98)

(Fig.7.1 Implementation)

After logging through Metamask. We are redirecting to the main login page of our website.

Website login page

 ![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/e9b91760-8489-41ae-a6e6-80d45233fceb)

(Fig.7.2 Implementation)


In this login page, we are login through email address and password.
If we log in through the admin credential then we go on the admin section and if we login through the user credential then we redirect to the user section.
Phase 1

Admin manual

 ![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/c18fb5c7-465c-4f25-8005-ad7cb9566986)

(Fig.7.3 Implementation)

If we login through admin credentials then we are redirected on this page and here we can see the manual of admin. In left side you can see multiple options manual candidate registration, voter registration, candidate info, voter info, voting phase, get winner, analysis, voting, profile, logout.

candidate registration page

 ![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/073e0325-7474-47e5-8302-8441896588c8)

(Fig.7.4 Implementation)

In candidate registration we can add candidate manually. And whitelist them.

Voter registration page

 ![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/61c52167-479f-4cdb-b159-b852c5701105)

(Fig.7.5 Implementation)

In this page when voter register we can see them here. From here admin can whitelist candidate for vote. Without whitelisting them candidate cannot vote.

Voting phase page

 ![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/882c683f-1cd4-4549-b76a-053a07647ade)

(Fig.7.6 Implementation)

From here Admin can start and stop voting.

Get winner page

 ![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/49331db1-fb02-45e1-b8c2-3da5be6d715b)

(Fig.7.7 Implementation)

After stopping the vote we can get a result. When we click on get winner we can see the name of the winner.

Phase 2
From the login page if I log in through the user then I am redirected from this page

 ![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/3e70b7fc-2447-43f8-b374-f15cf6a5ef1f)

(Fig.7.8 Implementation)

this is the voter manual page. In the left panel you can see voter dashboard. In dashboard you can see candidate info, voting area, analysis, result, profile, logout.

Voting area page

![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/6b30cdf9-5727-4b39-9c11-61e4eb7ea379)

 (Fig.7.9 Implementation)

In this voting area page we can see and vote our selected candidate. But you can vote during voting phase in on.

profile

 ![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/a8ced013-17d2-470b-8e48-10bc14c5fce7)

(Fig.7.10 Implementation)

This is profile of voter. In this profile you can see name of voter, email id of voter, account number of voter, user if of voter and role of voter.

![image](https://github.com/Malay-Thakkar/Ethereum-Voting-Dapp/assets/78149426/dd118c77-6ab1-44be-83e3-04b7ab98efdb)

user registration
 
(Fig.7.11 Implementation)


