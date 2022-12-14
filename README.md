# bridgeInterview

To further test your ability with solidity language, we have decided to set up a little test for you.This test  is to ascertain the level of your understanding of the language and how rooted you are in solidity.the bridge smart have been made public to you on the link as followshttps://github.com/bridgeNetwork1/bridgeInterview

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
