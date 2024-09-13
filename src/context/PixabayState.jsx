import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'

const PixabayState = (props) => {
 const [imageData, setImageData] = useState([]);
 const [query, setQuery] = useState("london");

 useEffect(() => {
     const fetchData= async()=>{

        const api_key='45958229-335aabe253a969f568768df42';
        
        const api=await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=50`);
         const data=await api.json();

         console.log(data.hits);
         setImageData(data.hits);
     }
     fetchData();
 }, [query]);

 const fetchDataByCategory= async(cat)=>{

    const api_key='45958229-335aabe253a969f568768df42';
    
    const api=await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=50`);
     const data=await api.json();

     console.log(data.hits);
     setImageData(data.hits);
 }
 
 
 
 
    return (
   <MyContext.Provider value={{imageData,fetchDataByCategory,setQuery}}>{props.children}</MyContext.Provider>
   
  )
}

export default PixabayState
