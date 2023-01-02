require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  paths:{
    artifacts: './artifacts',
  },
  networks: {
    
    testnet: {
      url: process.env.BINANCE_TESTNET_RPC_URL,
      timeout: 150000000,
      allowUnlimitedContractSize:true,
      chainId: 97,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    hardhat: {  
      allowUnlimitedContractSize:true,
      chainId: 1337,
      timeout: 150000000,
    },
  },
  // gasReporter: {
  //   enabled: process.env.REPORT_GAS !== undefined,
  //   currency: "USD",
  // },
  // etherscan: {
  //   apiKey: process.env.ETHERSCAN_API_KEY,
  // },
};
