const { expect } = require("chai");
const {ethers} = require("hardhat");
describe("MessageStorage", function () {
  let messageStorage;
  let owner, user;
  before(async function () {
    [owner, user] = await ethers.getSigners();

    const MessageStorage = await ethers.getContractFactory("MessageStorage");
    messageStorage = await MessageStorage.deploy();
  });

  it("Should initially retrieve an empty message", async function () {
    const initialMessage = await messageStorage.getMessage();
    expect(initialMessage).to.equal("");
  });

  it("Should set a message without failing", async function () {
    const newMessage = "Hello, Techdome Solution!";
    const setMessage = await messageStorage
      .connect(owner)
      .setMessage(newMessage);
    expect(setMessage).to.not.be.reverted;
  });

  it("Should set and retrieve a message", async function () {
    const newMessage = "Hello, Techdome Solution!";
    await messageStorage.connect(owner).setMessage(newMessage);
    const storedMessage = await messageStorage.connect(user).getMessage();
    expect(storedMessage).to.equal(newMessage);
  });
  it("Should set and retrieve a message with other user", async function () {
    const newMessage = "Hello, Techdome Solution!";
    await messageStorage.connect(user).setMessage(newMessage);
    const storedMessage = await messageStorage.connect(user).getMessage();
    expect(storedMessage).to.equal(newMessage);
  });
});
