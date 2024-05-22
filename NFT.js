// Array variable to hold NFTs
//an empty array
//This array will store all the NFT objects we create.
let nftCollection = [];


// function for minting a new NFT and add it to our collection
function mintNFT(name, constituency, party) {
    //Inside the function, we create an object nft
  const nft = {
    name: name,
    constituency: constituency,
    party: party
  };

//The new nft object is then added to the nftCollection array using the push method
  nftCollection.push(nft);
}


//to list all NFTs
function listNFTs() {
    //use the forEach method to loop through each element (NFT) in the nftCollection array.
  nftCollection.forEach((nft, index) => {
    
    console.log(`NFT ${index + 1}:`);//the NFT number
    console.log(`  Name: ${nft.name}`);
    console.log(`  Constituency: ${nft.constituency}`);
    console.log(`  Party: ${nft.party}`);
  });
}

//to get the total number of NFTs
function getTotalSupply() {
  return nftCollection.length;//returns the length of the nftCollection array, which represents the number of NFTs in the collection.
}


//call mintNFT three times with different MP details to create three NFTs.
mintNFT("Narendra Modi", "Varanasi", "Bharatiya Janata Party");
mintNFT("Rahul Gandhi", "Wayanad", "Indian National Congress");
mintNFT("Mamata Banerjee", "Bhabanipur", "All India Trinamool Congress");

console.log("Listing all NFTs:");
listNFTs();//to log all the NFTs in the collection

console.log(`Total number of NFTs minted: ${getTotalSupply()}`);// total number of NFTs.
