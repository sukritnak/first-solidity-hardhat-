const { ethers } = require("hardhat");

async function main() {
    const BankAccount = await ethers.getContractFactory("BankAccount")
    const bankAccountContract = await BankAccount.deploy()

    console.log("BankAccount deploy to:", bankAccountContract.address)

}

main().then(() => process.exit(0)).catch(error => {
    console.log('---BankAccount----')
    console.error(error);
    process.exit(1)
})