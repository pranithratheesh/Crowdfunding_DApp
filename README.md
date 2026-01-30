**Overview**
A decentralized crowdfunding platform built on Ethereum where users can create projects, accept trustless contributions, and release funds only after predefined conditions are met. The system removes centralized intermediaries and ensures transparency, immutability, and automated fund handling via smart contracts.
________________________________________
**Problem Statement**
Traditional crowdfunding platforms rely on centralized authorities to:
•	Hold user funds
•	Decide when creators receive payouts
•	Enforce platform rules
This introduces risks such as:
•	Fund misuse
•	Platform bias
•	Delayed or blocked withdrawals
•	Lack of transparency for contributors
________________________________________
**Solution**
This project implements a trustless crowdfunding mechanism using Solidity smart contracts where:
•	Projects are created on-chain
•	Contributions are tracked transparently
•	Funds can only be withdrawn after conditions are satisfied
•	All transactions are publicly verifiable
No centralized party can freeze or redirect funds.
________________________________________
**High-Level Architecture**
Actors
•	Project Creator
•	Contributors
•	Smart Contract (Escrow + Logic)
Flow
1.	Creator deploys a project with a funding goal and deadline
2.	Contributors invest ETH into the project
3.	If the goal is reached before the deadline:
o	Creator can withdraw funds
4.	If the goal is not reached:
    o	Contributors can reclaim their funds
________________________________________
**Smart Contract Design Decisions**
Why on-chain escrow?
Funds are locked inside the smart contract to:
•	Prevent premature withdrawals
•	Eliminate trust in the project owner
•	Guarantee rule-based fund movement
Why deadline-based funding?
Deadlines:
•	Protect contributors from indefinite fund locking
•	Enable deterministic refunds
•	Simplify state transitions
________________________________________
**Security Considerations**
•	Checks-Effects-Interactions pattern
Prevents reentrancy during withdrawals
•	Access control
Only project owners can withdraw successful funds
•	Input validation
o	Rejects zero-value contributions
o	Prevents invalid project IDs
•	Fail-safe refunds
Contributors can reclaim funds if funding goals are not met
________________________________________
**Failure Scenarios & Handlin**g
Scenario	Handling
Goal not reached	Contributors can withdraw refunds
Creator tries early withdrawal	Transaction reverts
Contribution after deadline	Transaction reverts
Invalid project ID	Transaction reverts
________________________________________
**Gas Optimization Techniques**
•	Minimal storage writes
•	Packed structs for project data
•	Avoided unnecessary external calls
•	Used require early to fail fast
________________________________________
**Tech Stack**
•	Solidity – Smart contracts
•	Hardhat – Development & testing
•	Ethers.js – Contract interaction
•	Ethereum (Testnet) – Deployment
________________________________________
**How to Run Locally**
npm install
npx hardhat compile
npx hardhat test
________________________________________
**Future Improvements**
•	Milestone-based fund release
•	DAO-based project approval
•	ERC-20 contributions
•	Layer-2 deployment for lower gas fees
________________________________________
**Author**
Pranith Ratheesh
Blockchain Engineer | Smart Contracts | DeFi
