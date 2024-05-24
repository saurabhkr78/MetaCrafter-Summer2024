// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleContract {
    uint private myUint;
    string private myString;
    bool private myBool;
    address private myAddress;

    function setMyUint(uint _myUint) public returns (uint) {
        myUint = _myUint;
        return myUint;
    }

    function getMyUint() public view returns (uint) {
        return myUint;
    }

    function setMyString(string memory _myString) public returns (string memory) {
        myString = _myString;
        return myString;
    }

    function getMyString() public view returns (string memory) {
        return myString;
    }

    function setMyBool(bool _myBool) public returns (bool) {
        myBool = _myBool;
        return myBool;
    }

    function getMyBool() public view returns (bool) {
        return myBool;
    }

    function setMyAddress(address _myAddress) public returns (address) {
        myAddress = _myAddress;
        return myAddress;
    }

    function getMyAddress() public view returns (address) {
        return myAddress;
    }
}
