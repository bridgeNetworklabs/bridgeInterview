# bridgeInterview

To further test your ability with solidity language, we have decided to set up a little test for you.This test  is to ascertain the level of your understanding of the language and how rooted you are in solidity.the bridge smart have been made public to you on the link as followshttps://github.com/bridgeNetworklabs/bridgeInterview

This project contains the token bridge contract for the bridge protocol.the tas is as follows:
1. go over the entire project code and see if you can understand the design and flow of the project    ensure you understand each contract and how they are related to each other.
 
2. if you have successfully completed the first task, then in the file Registry.sol in the function validateTransaction on line 195, a part of the code was removed. As an experienced solidity developer you are expected to come with the solution on how to validate the signatures. write the solidity code for the solution to fit the function requirements on line 215.
 // this part of the code was remove to access if you can recreate it to verify the signatures for a transaction
 // the message that was signed by the validators is a hash of derived as shown bellow
 // keccak256(abi.encodePacked( 
 // "\x19Ethereum Signed Message:\n32", // keccak256(abi.encodePacked( 
 // chainID, // this is goten from Ibridge(owner()).chainId() //
 interfacingChainId, 
 // assetAddress, 
 // amount,
 // receiver,
 // nounce 
 // ))))
 
 // to all you need to do here is verify each of this signatures to accertain if the are from a valid signer

3. deploy the entire project on the bsc testnet and set up the project correctly and verify each contract on bsc scan.
4. register a rail on the deployed project 
5.  send out some tokens using the send function on the bridge contract.
6.  register a foreign asset
7.  register a mintTransaction 
8.  validate the mint transaction 
you have 72 hours to attempt this. once successful share the contract addresses of the deployed project.Thank you and goodluck.


Answer:
3. Contract Addresses:
    Controller: 0x151E05aB10b05dC744fc0573272A0CB5dB1AdF40
    Deployer: 0xB2EF60Dd97fD62DD4C2a1F211A55145966f80F33
    Registry: 0xAeDC1eeAda0a13bf23AB031469CC6Fe6bE094071
    Settings: 0x606806107361ca9F232576918B14B9519293B4D8
    FeeConroller: 0x5D3D1126C2F0dBf7f00c5862C8b254be0c27e151
    BridgePool: 0x1b5208b160D08547105b07C04fE5B7F5F7F72497
    Bridge: 0x955ce90A740d9cb841423CdeC66c5556c2173aF1
    TokenContract: 0x9c096c3f3171f6443cf7cd766684D09fBdBD376f


4. transactionHash = 0xd207f6f60673a03fd4d391bdbbaea5991f492d171602ccc0f1189be785f25c8b
5. transactionHash = 0x186c4d2d012b0fc1060071edd8c4310551f9a5f1d2ea9cb042e09f22ba928eef
6. transactionHash = 0x48f8d4f74866e976c8c681d9973432f9733d7f66620d49cc4c892c760e6f48bc
7. transactionHash = 0x16339681957e6e94954f750b422a95e9797f49731fa7dae590d0ca3d321d6d31
8. transactionHash = 0x5df67a489a220c91e47654129227b4b6caeb6335a6b2417097c43b46ca8fb5fc
