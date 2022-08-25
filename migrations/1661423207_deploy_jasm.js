const JustASmartContract = artifacts.require("JustASmartContract.sol");
module.exports = function (deployer) {
  deployer.deploy(JustASmartContract);
};
