// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

contract EtherValue {

    // Variable to store the amount of Ether sent to the contract
    uint public amountInWei;

    // Function to receive Ether
    receive() external payable {
        amountInWei += msg.value;
    }

    // to get the amount of Ether in wei
    function getAmountInWei() public view returns (uint) {
        return amountInWei;
    }

    //to get the amount of Ether in ether 
    function getAmountInEther() public view returns (uint) {
        return amountInWei / 1 ether;
    }

    // to get the amount of Ether in gwei (using fixed-point arithmetic)
    function getAmountInGwei() public view returns (uint) {
        return amountInWei / 1 gwei;
    }
}
