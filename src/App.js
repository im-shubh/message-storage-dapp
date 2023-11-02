import "./App.css";
import Web3 from "web3";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContractAddress from "./ContractAddress.json";

function App() {
  const [accounts, setAccounts] = useState();
  const [newMessage, setNewMessage] = useState();
  const [retrieveMessage, setRetrieveMessage] = useState();
  const [loader, setLoader] = useState();

  const abi = [
    {
      inputs: [],
      name: "getMessage",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "newMessage",
          type: "string",
        },
      ],
      name: "setMessage",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  async function ConnectWalletHandler() {
    setLoader("connecting wallet");
    if (typeof window.ethereum !== "undefined") {
      // const web3 = new Web3(window.ethereum);
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          setAccounts(accounts[0]);
          toast.success("Connected Successfully!");
          setLoader("");
        })
        .catch((error) => {
          toast.error(error.message);
          setLoader("");
        });
    } else {
      // MetaMask is not available
      setLoader("");

      toast.error("Please install and enable MetaMask.");
    }
  }
  async function getMessage() {
    setLoader("getMessage");
    try {
      const web3 = new Web3(window.ethereum);
      const myContract = new web3.eth.Contract(
        abi,
        ContractAddress.ContractAddress
      );
      const result = await myContract.methods
        .getMessage()
        .call({ from: accounts });
      setRetrieveMessage(result);
      setLoader("");
    } catch (error) {
      setLoader("");
      toast.error(error);
    }
  }
  async function setMessage() {
    setLoader("setMessage");
    try {
      if (newMessage) {
        const web3 = new Web3(window.ethereum);
        const myContract = new web3.eth.Contract(
          abi,
          ContractAddress.ContractAddress
        );
        const gasPrice = "20000000000"; // Gas price in wei (e.g., 20 Gwei)
        const gasLimit = 200000;
        const tx = await web3.eth.sendTransaction({
          from: accounts,
          to: ContractAddress.ContractAddress,
          data: myContract.methods.setMessage(newMessage).encodeABI(),
          gasPrice: gasPrice,
          gas: gasLimit, // Set the gas limit here
        });
        if (tx) {
          toast.success("Transaction Confirm!");
          setLoader("");
        }
      } else {
        toast.error("Please enter a message!");
        setLoader("");
      }
    } catch (error) {
      setLoader("");
      toast.error(error.message);
    }
  }

  return (
    <div className="App">
      <ToastContainer />
      <h1 className="text-light fw-bolder pt-5">
        Welcome to Message Storage Dapp
      </h1>
      <div className="d-flex justify-content-center mt-5">
        <div
          className="card shadow"
          style={{ width: "650px", minHeight: "300px" }}
        >
          {accounts ? (
            <div className="card-body">
              <p className="text-start fw-bold">
                Set Your Message on Message Storage Dapp
              </p>
              <div className="input-group mb-3">
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Message"
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  className="btn btn-primary "
                  type="button"
                  id="button-addon2"
                  onClick={() => setMessage()}
                >
                  {loader === "setMessage" ? (
                    <div className="spinner-border text-dark" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "setMessage"
                  )}
                </button>
              </div>
              {retrieveMessage ? (
                <p className="pt-3 fs-3">{retrieveMessage}</p>
              ) : null}
              <button
                type="button "
                className={`btn btn-primary btn-md ${
                  retrieveMessage ? "mt-2" : "mt-5"
                }`}
                onClick={() => getMessage()}
              >
                {loader === "getMessage" ? (
                  <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "getMessage"
                )}
              </button>
            </div>
          ) : (
            <div className="card-body">
              <p className="card-text fs-3">
                Please Connect Your Metamask Wallet
              </p>
              <button
                type="button "
                className="btn btn-primary btn-lg mt-5"
                onClick={() => ConnectWalletHandler()}
              >
                {loader === "connecting wallet" ? (
                  <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Connect Wallet"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
