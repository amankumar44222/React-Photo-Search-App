import React, { useEffect, useState } from 'react'
import Image from './Image';
import { getSearchedImages, getTrendingImages } from "./api";
import Masonry from 'react-masonry-component';

const Gallery = ({query}) => {
    const [imgList,setImgList] = useState([]);
    useEffect(() => {
        getTrendingImages().then((data) =>{
            // console.log(data);
             setImgList(data);
        })

}, []);

useEffect(async () => {
   const data = await getSearchedImages(query);
   setImgList(data);
   console.log(data);
}, [query]);

return (
    <>
    {imgList.length===0 ? <> <h1> No images found </h1>
    <br /> <h2>Please search different keywords</h2> </>:null}
    <Masonry className="grid-container" options={{isFitWidth:true}}>
        {imgList.map(img => {
            return <Image src={img.urls.small}  key={img.id}/>
        })}
    </Masonry>
    </>
)
}


export default Gallery;