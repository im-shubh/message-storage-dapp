// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MessageStorage {
    string private storedMessage;

    // Function to set or update the stored message
    function setMessage(string memory newMessage) public {
        storedMessage = newMessage;
    }

    // Function to retrieve the stored message
    function getMessage() public view returns (string memory) {
        return storedMessage;
    }
}
