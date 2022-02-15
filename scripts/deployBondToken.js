const { ethers } = require("hardhat");

async function main() {
    const BondToken = await ethers.getContractFactory("BondToken")
    const bondTokenContract = await BondToken.deploy()

    console.log("BondToken deploy to:", bondTokenContract.address)

}

main().then(() => process.exit(0)).catch(error => {
    console.log('-------')
    console.error(error);
    process.exit(1)
})