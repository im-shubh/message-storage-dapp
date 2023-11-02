# Message Storage DApp

## Overview

**Message Storage DApp** is a decentralized application (DApp) that allows users to store and retrieve messages on the Ethereum blockchain. This project is built using React, Hardhat, and Web3.

## Installation

To get started with the development and testing of the DApp, follow these steps:

1. Clone the repository:

```bash
   git clone https://github.com/im-shubh/message-storage-dapp.git
   cd message-storage-dapp
```

2. Install dependencies:

```shell
   npm install
```

## Start a local development blockchain (ganache):

```shell
   npm run ganache
```

## Running Tests(Open another terminal)

To run the provided tests, use the following command:

```shell
   npx hardhat test --network ganache
```

## Compiling Smart Contracts

To compile smart contracts, run:

```shell
   npx hardhat compile
```

## Deploy Smart Contracts

To deploy smart contracts local development blockchain, run:

```shell
   npx hardhat run --network ganache scripts/deploy.js
```

# Configuring MetaMask for Ganache Local Network

This guide will help you set up and configure MetaMask to interact with a Ganache local Ethereum network for development and testing purposes.

## Configuration Steps

1. **Open MetaMask**:

   Launch your web browser and open the MetaMask extension.

2. **Access Settings**:

   - Click on the MetaMask extension icon (usually located at the top right of your browser).
   - In the MetaMask popup, click the profile icon (your account icon) at the top right.
   - Click "Settings" from the dropdown menu.

3. **Networks**:

   - In the Settings tab, select "Networks" from the left sidebar.

4. **Add Custom RPC**:

   - Under Networks, scroll down to the "Custom RPC" section.
   - Click "Add Network" to configure your Ganache network.

5. **Fill in Network Details**:

   - **Network Name**: Enter a name for your Ganache network (e.g., "Local Ganache").
   - **New RPC URL**: Enter the RPC server URL provided by your running Ganache instance (usually `http://127.0.0.1:8545` or the address where Ganache is running).
   - **Chain ID**: Leave this empty or set it to match your Ganache's chain ID (default is usually `1337`).
   - **Currency Symbol**: Set this to any preferred currency symbol (e.g., "ETH").
   - **Block Explorer URL**: Leave this empty.

6. **Save Configuration**:

   - Click "Save" to save the configuration for your Ganache network.

7. **Switch to Ganache Network**:

   - Click the MetaMask extension icon.
   - In the extension popup, click on the network dropdown.
   - Select your "Local Ganache" network.

8. **Connect to Ganache**:

   You should now be connected to your local Ganache network via MetaMask. Ensure that you have accounts and Ether available in your Ganache environment to interact with.

## Import Private Key

1. **Open MetaMask**:

   Launch your web browser and open the MetaMask extension.

2. **Access the Account Menu**:

   - Click on the MetaMask extension icon in your browser.
   - In the extension popup, click your account icon at the top right to access your accounts.

3. **Create a New Account**:

   If you don't already have an account in MetaMask, create a new one. This will serve as the destination for the imported private key.

4. **Import the Private Key**:

   - Click on the three dots (...) next to your newly created account.
   - Select "Account Details."

5. **Access the Account Details**:

   In the Account Details page, you will see options to create or import an account. Click "Import Account."

6. **Paste the Private Key**:

   In the "Import Account" section, you will be prompted to enter your private key. Paste the private key you have copied from your Ganache wallet.

7. **Import the Account**:

   Click the "Import" button to import the private key into MetaMask.

8. **Access the Imported Account**:

   You will now see the Ganache account imported into MetaMask. You can switch between accounts as needed.

## Now Run The Frontend

To Run The Frontend, run:

```shell
  npm start
```
