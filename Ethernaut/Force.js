const main = async () => {
    const [deployer] = await hre.ethers.getSigners();   
  
    console.log("Deploying sender contract with account: ", deployer.address);
    
    //Deploy my custom contract
    //compiles the contract
    const TakeMyEthFactory = await hre.ethers.getContractFactory("TakeMyEth");
    //deploys the contract
    const TakeMyEthContract = await TakeMyEthFactory.deploy({
        value: hre.ethers.utils.parseEther("0.00001"),
      });
    //waits for contract to be mined
    await TakeMyEthContract.deployed();


    //informational for logs
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("deployed contract address: ", TakeMyEthContract.address);

    //compiles the contract
    const ForceFactory = await hre.ethers.getContractFactory("Force");
    //deploys the contract
    const ForceContract = await ForceFactory.deploy();

    //wait for transaction to be mined
    await ForceContract.deployed();
    let forceContractBalance = await hre.ethers.provider.getBalance(
      ForceContract.address
    );

    //Verify 0 starting balance for challenge contract
    console.log(
      "Force Contract balance:",
      hre.ethers.utils.formatEther(forceContractBalance)
    );
    console.log("deployed contract address: ", ForceContract.address);
    
    /*
   * Get interfacing Contract balance
   */
    let contractBalance = await hre.ethers.provider.getBalance(
      TakeMyEthContract.address
    );

    console.log(
      "My Contract balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );

    //Call the interfacing contract's self destruct
    let takeEthTxn = await TakeMyEthContract.takeMyEth(ForceContract.address);
    //await takeEthTxn.wait(); // Wait for the transaction to be mined
    await takeEthTxn.wait();

    //Verify final balance for challenge contract
    
    forceContractBalance = await hre.ethers.provider.getBalance(
      ForceContract.address
    );
    console.log(
      "Final Force Contract balance:",
      hre.ethers.utils.formatEther(forceContractBalance)
    );
  };

    
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
