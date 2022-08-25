module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8584,
      network_id: "*",
      gas: 4712388,
      gasPrice: 100_000_000_000,
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.16", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
