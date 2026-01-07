import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deplyQuickStarterFixture() {
    
    // Contracts are deployed using the first signer/account by default
    const [owner, project, investor1, investor2] = await hre.ethers.getSigners();

    const QuickStarter = await hre.ethers.getContractFactory("QuickStarter");
    const quickstarter = await QuickStarter.deploy();

    return { owner, quickstarter, project, investor1, investor2 };
  }

  describe("Deployment", function () {
    it("Should set owner correctly", async function () {
      const { owner, quickstarter } = await loadFixture(deplyQuickStarterFixture);
      expect(await quickstarter.owner()).to.equal(owner.address);
    });
    });

    describe("Project Creation", function () {
      it("Should create a project successfully", async function () {
        const { quickstarter, project } = await loadFixture(deplyQuickStarterFixture);
        await expect(quickstarter.connect(project).createProject("Test Project", hre.ethers.parseEther("10"))).to.emit(quickstarter, "ProjectCreated")
        .withArgs(0, "Test Project", project.address, hre.ethers.parseEther("10"));

        const createdProject = await quickstarter.getProjectDetails(0);
        expect(createdProject.name).to.equal("Test Project");
        expect(createdProject.goalAmount).to.equal(hre.ethers.parseEther("10"));
        expect(createdProject.owner).to.equal(project.address);
    });
    });
    });
