require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rate stereo purpose hunt battle equal genuine'; 
let testAccounts = [
"0xcd06e9dac203d7f986482da27f7a0c35d1f609fb8004e7aa4e3ae5d8498a6a41",
"0xddc8a183958479fbf59f4da8b555d4808a6767e3259f412029d4cc83be705eff",
"0x954d2fa52c095e77a1ec63e4c4328c1d3690425674ca2c51063530934b466fcc",
"0x055133802919f6928e99f3e0560008b9020653bab2b219a5e80b49eee580c58d",
"0xb62e5ff3bd57c1125f696c51aa59cfbea76f9029f25aa238aee0d59e47c09788",
"0x86b045de8825fd38763a783722fc509d536ca7d4d51554fc9d03bab261d46ee5",
"0x2dac9a9a2fe1efc107e20b357ec046eb3109a191c2fafd9f307aa961aee20847",
"0x18f6d3b48922a5ee1f79ec82cc7361f5ee0e20a1071a39623fa8dbc7cfcc582c",
"0x420f430455de3c3ec18ff85f821c4a76c4b12808c215b9fce37296b7c02228b5",
"0x1a1cae9daf6458957095504407e21327e6ea7b6c6ca312f534a0d33e8e2b09fe"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

