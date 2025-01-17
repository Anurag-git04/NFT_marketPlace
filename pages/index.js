import React,{useState, useEffect, useContext} from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,

} from "../components/componentsindex";

// IMPORTING CONTRACT DATA
import {checkContract, NFTMarketplaceContext} from "../Context/NFTMarketplaceContext";


const Home = () => {
  const {checkIfWalletConnected} =useContext(NFTMarketplaceContext);
  useEffect(()=>{
    checkIfWalletConnected()
  },[])

  const {fetchNFTs} = useContext(NFTMarketplaceContext);
  const [nfts, setNfts]  = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(()=>{
    fetchNFTs().then((item)=>{
      setNfts(item.reverse());
      setNftsCopy(item);
      console.log(nfts);

    });
  }, []);
 
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      <FollowerTab />
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <NFTCard NFTData={nfts} />
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
      <Brand />
  
    </div>
  );
};

export default Home;