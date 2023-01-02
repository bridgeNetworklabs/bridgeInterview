const { BigNumber } = require("ethers");
const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(deployer.address);
  // We get the contract to deploy

  const Controller = await (await ethers.getContractFactory("Controller"));
  const Deployer = await (await ethers.getContractFactory("Deployer"));
  const Settings = await (await ethers.getContractFactory("Settings"));
  const Registry = await (await ethers.getContractFactory("Registry"));
  const FeeController = await (await ethers.getContractFactory("FeeController"));
  const BridgePool = await (await ethers.getContractFactory("BridgePool"));
  const Bridge = await (await ethers.getContractFactory("Bridge"));
  const Token = await (await ethers.getContractFactory("Token"));
   
  const controller = await Controller.deploy();
  const dep = await Deployer.deploy(controller.address);
  const settings = await Settings.deploy(controller.address,deployer.address );
  const registry = await Registry.deploy();
  const feeController = await FeeController.deploy(controller.address, settings.address);
  const bridgePool = await BridgePool.deploy(controller.address);
  const bridge = await Bridge.deploy(controller.address , settings.address, registry.address, dep.address ,feeController.address , bridgePool.address ,deployer.address);
  const token = await Token.deploy("markAn", "Mrl");

  console.log("Controller address ", controller.address)
  console.log("Deployer address ", dep.address)
  console.log("Settings address ", settings.address)
  console.log("Registry address ", registry.address)
  console.log("FeeController address ", feeController.address)
  console.log("BridgePool address ", bridgePool.address)
  console.log("Bridge address ", bridge.address)
  console.log("Token address ", token.address)

  
  await bridgePool.initializePool(bridge.address);
  console.log("Finished initializng pool")
  await bridge.activeNativeAsset(token.address, true);
  await settings.setNetworkSupportedChains([5,97],[1,1], true);
  await token.approve(bridge.address, 100000);
  await bridge.registerRail(token.address,10, 100, [5,97], ["0x71faAd21f62cb0a7A8d57a603Bc7C893F3749F8f","0xdAb99aba990D7320e74F5246573050191317F05C"],
  true,deployer.address, deployer.address, 1)
  await bridge.send(5,token.address, 80, "0xdAb99aba990D7320e74F5246573050191317F05C",  { value: ethers.utils.parseEther("0.0001") });
  await bridge.addForiegnAsset("0x87e096350cDaeD7dadf702872Bc28F4b2D6421E6", 5, [0,1], ["Mark","Testing"], true,deployer.address, deployer.address, 
  1,true,deployer.address)

  await registry.registerMintTransaction("0x3100000000000000000000000000000000000000000000000000000000000000"
  ,5, token.address, 10000,"0x71faAd21f62cb0a7A8d57a603Bc7C893F3749F8f", 2)

  
  await registry.validateTransaction("0x3100000000000000000000000000000000000000000000000000000000000000"
  ,["0x63a03e8d336663ec578953415c412e180180d0bce23e9f65fe89238c6806a99b7658fbf933531f3c85f88e65f6fe22d1bb81e816ea7ffb02e665115e3a4987581c"],true)

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
