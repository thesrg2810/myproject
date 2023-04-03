require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/l8CDMhNv0R2JpusyElZkN10vln79vRMZ',
      accounts: ['e61c2b1db2437de35129e7861d3441f1ed30e8e3b7b68114fc56f371984a4b14'],
    },
  },
};