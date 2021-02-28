require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth remember under include clinic forget tattoo'; 
let testAccounts = [
"0xfb726c04f1ba23162bc6d22b1716ab3fb64cd0789fb70e07b82b4e76ba424c05",
"0xcda53cab14f0617fdfaa79722ea09bba94980473fc9bce7f9e4a39d000fb8a06",
"0xdc7626fc836400e9d89e4f9e6c71211c149c9feab54832c202bb71ba0efd305a",
"0x33efb7ccb8165102fe69d161ca526c2b87a411a9363984e5971446a752023cdd",
"0xa2f640de94c443cd40b9cc3d8307cf0d3619f5aa3e0aa481f235f2f27b8cc305",
"0x5a74e3edb5614cc553d32e5cb6755641b4f8dd1a9e9cb41a0c9c78e7bbfdda85",
"0x464b8def9e60c6cead0306e40ca732598e2729d92c8e21a25f6359cb3d839633",
"0xc97629e68caa714f53047e3978b7b01de9f738a14f76d8d1a542632dd2a65d2a",
"0xaf1e35b080b94d118e9c855500e47510f34e621a5b9e8432c4d3f2ed94175237",
"0x68a721545cea8ca415dc516ecf7e5094a9a6ac5daa1c12b395145b257d39d481"
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
            version: '^0.5.11'
        }
    }
};
