const player = artifacts.require("PlayerContract");

module.exports = function(deployer) {
  deployer.deploy(player);
};