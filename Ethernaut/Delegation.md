This contract requires us to change owner to our own address. .
To change Delegation we need to call the fallback function by sending a transaction that will hit the fallback function. 

We need to generate the function signature to pass in as msg.data into the delegatecall.

var pwnSig = web3.utils.sha3("pwn()")

Then sendTransaction with data field to hit the fallback function.

contract.sendTransaction({data: pwnSig})
