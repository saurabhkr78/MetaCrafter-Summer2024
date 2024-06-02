//every candidate is a unique digital asset i.e NFT
// create Array variable to hold NFTs
//Here i create an empty array
//This array will store all the NFT objects we create.
let nftCollection = [];

// function for minting a new NFT and add it to our collection i.e Array variable nftCollection
function mintNFT(name, party) {
  //Inside the function, we create an object nft
  // A constant variable cannot be reassigned after its initial assignment, ensuring that the reference to the nft object remains unchanged.
  const nft = {
    //three properties of NFT object
    name: name,
    party: party,
  };

  //The new nft object is then added to the nftCollection array using the push method
  nftCollection.push(nft);
}

//function to list all NFTs
function listNFTs() {
  //use the forEach method to loop through each element (NFT) in the nftCollection array.
  nftCollection.forEach((nft, index) => {
    console.log(`NFT ${index + 1}:`); //to give each NFTs a number and index=0(base)
    console.log(`  Name: ${nft.name}`);
    console.log(`  Party: ${nft.party}`);
  });
}

//function to get the total number of NFTs
function getTotalSupply() {
  return nftCollection.length; //returns the length of the nftCollection array, which represents the number of NFTs in the collection.
}

//call mintNFT three times with different MP details to create three NFTs.
mintNFT("Narendra Modi","BJP");
mintNFT("Rahul Gandhi", "INC");
mintNFT("Mamata Banerjee","TMC");

console.log("The below following NFTs are minted:");
listNFTs(); //to log all the NFTs in the collection

console.log(`Total NFTs minted: ${getTotalSupply()}`); // total number of NFTs.
