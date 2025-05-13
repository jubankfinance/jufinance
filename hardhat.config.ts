import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545"
        },
        bsc_mainnet: {
            url: "https://bsc-dataseed.binance.org/",
            accounts:
                process.env.TEST_PRIVATE_KEY !== undefined
                    ? [process.env.TEST_PRIVATE_KEY]
                    : [],
            allowUnlimitedContractSize: true,
        },
        bsc_testnet: {
            url: "https://data-seed-prebsc-2-s2.binance.org:8545",
            accounts:
                process.env.TEST_PRIVATE_KEY !== undefined
                    ? [process.env.TEST_PRIVATE_KEY]
                    : [],
            allowUnlimitedContractSize: true,
        },
    },
    solidity: {
        version: "0.7.5",
        settings: {
            evmVersion: "berlin",
            optimizer: {
                runs: 200,
                enabled: true,
            },
        },
    },
    paths: {
        sources: "./contracts",
        tests: "test",
    },
    etherscan: {
        apiKey: process.env.API_KEY,
    },
    mocha: {
        timeout: 3600000,
    },
};

export default config;
