// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://v2.hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const QuickStarterModule = buildModule("QuickStarterModule", (m) => {

  const quickstarter = m.contract("QuickStarter")
 
  return { quickstarter };
});

export default QuickStarterModule;
