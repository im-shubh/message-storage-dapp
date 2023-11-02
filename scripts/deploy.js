// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const newMessage = "Hello, Techdome Solution!";
  const MessageStorage = await hre.ethers.deployContract("MessageStorage");

  const messageStorageContract = await MessageStorage.waitForDeployment();
  const setNewMessage = await MessageStorage.setMessage(newMessage);
  console.log("Contract deploy at ", await messageStorageContract.getAddress());

  const jsonData = JSON.stringify(
    { ContractAddress: await messageStorageContract.getAddress() },
    null,
    2
  ); // The 'null, 2' arguments format the JSON with 2 spaces for readability

  // Define the file path where you want to create the JSON file
  const filePath = "./src/ContractAddress.json";

  fs.writeFile(filePath, jsonData, (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
    }
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
