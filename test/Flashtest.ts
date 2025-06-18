import { ethers } from "hardhat";

describe("ABasicTest", function () {
  it("GetsBlockNumber", async function () {
    // const provider = ethers.provider;
    const provider = new ethers.providers.JsonRpcProvider(
      "https://bsc-dataseed.binance.org"
    );

    const blockNumber = await provider.getBlockNumber();
    console.log("Block Number: ", blockNumber);
  });
});
