import React, {useEffect, useState, useContext} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Image from 'next/image'

import Style from "../styles/reSellToken.module.css" 
import formStyle from '../AccountPage/Form/Form.module.css'
import {Button} from '../components/componentsindex'

import { NFTMarketplaceContext } from '../Context/NFTMarketplaceContext'

const resellToken = () => {
    const {createSale} = useContext(NFTMarketplaceContext)
    const [price, setPrice] = useState("")
    const [image, setImage] = useState('')
    const router = useRouter();
    const {id, tokenURI} = router.query;

    const fetchNFT = async() =>{
        if(!tokenURI) return

        const {data} = await axios.get(tokenURI);

        setPrice(data.price);
        setImage(data.image);
    }
    useEffect(()=>{
        fetchNFT()
    },[id])

    const resell = async()=>{
        try{
            await createSale(tokenURI, price, true, id);
            router.push("/author")
        }catch(error){
            console.log("Error while resell", error)
        }
      
    }

  return (
    <div className={Style.resellToken}>
        <div className={Style.resellToken_box}>
            <div className={formStyle.Form_box_input}>
                <label htmlFor="name">Price</label>
                <input
                type="number"
                min={1}
                placeholder="reSell price"
                className={formStyle.Form_box_input_userName}
                onChange={(e)=> setPrice(e.target.value)}
                />
            </div>

            <div className={Style.resellToken_box_image}>
                {
                    image && <Image src={image} alt="resell nft" width={400} height={400}/>
                }
            </div>

            <div className={Style.resellToken_box_btn}>
                <Button btnName="Resell NFT" handleClick={()=> resell}/>
            </div>
        </div>
    </div>
  )
}

export default resellToken