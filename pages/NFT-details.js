import React, {useContext, useEffect,useState} from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import { Button, Category, Brand } from "../components/componentsindex";
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage";

//IMPORT SMART Contract Data
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
const NFTDetails = () => {

  const { currentAccount } = useContext(NFTMarketplaceContext)

  const [nft, setNfts] = useState({
    imager:"",
    tokenId: "",
    name: "",
    owner: "",
    price: "",
    seller: ""
  })

  const router = useRouter();
  useEffect(() => {
    if(!router.isReady) return
    setNfts(router.query)
  }, [router.isReady])
  
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;