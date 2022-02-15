//SPDX-License-Identifier: MIT

pragma solidity 0.8.11;

contract BankAccount {
    mapping(address => uint256) _balances;

    function deposit() public payable {
        _balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 amount) public {
        require(amount <= _balances[msg.sender], "amount exceed balance");
        _balances[msg.sender] -= amount;

        payable(msg.sender).transfer(amount);
    }

    function balance() public view returns (uint256) {
        return _balances[msg.sender];
    }

    function totalSupply() public view returns (uint256) {
        return address(this).balance;
    }
}
