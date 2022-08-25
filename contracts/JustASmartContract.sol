// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract JustASmartContract {
    bytes32 public signature;
    event signEvent(bytes32 signature);

    // constructor() {}

    function sign(string memory document) public {
        signature = sha256(bytes(document));
        emit signEvent(signature);
    }
}
