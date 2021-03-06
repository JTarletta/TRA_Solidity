import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";


const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.7.3", settings: {} }],
  },
  networks: {
    hardhat: {},
    localhost: {},
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
	rinkeby: {
		url: https://eth-rinkeby.alchemyapi.io/v2/w5eMiHJRy_FBwi4uRnTRcIqxKMeeM4lj,
		accounts: [`0x$What_are_you_doing_looking_HERE???_fdp`],
		gasPrice: 8000000000
			}
	}
};

export default config
