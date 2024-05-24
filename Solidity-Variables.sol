//// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

contract SimpleStorage {

    uint private number;
    string private text;
    address private addr;
    bool private flag;

    //  for uint variable
    function setNumber(uint _number) public returns (uint) {
        number = _number;
        return number;
    }

    function getNumber() public view returns (uint) {
        return number;
    }

    // for string variable
    function setText(string memory _text) public returns (string memory) {
        text = _text;
        return text;
    }

    function getText() public view returns (string memory) {
        return text;
    }

    //  address variable
    function setAddress(address _addr) public returns (address) {
        addr = _addr;
        return addr;
    }

    function getAddress() public view returns (address) {
        return addr;
    }

    // for bool variable
    function setFlag(bool _flag) public returns (bool) {
        flag = _flag;
        return flag;
    }

    function getFlag() public view returns (bool) {
        return flag;
    }
}
