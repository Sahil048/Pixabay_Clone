import React, { useContext } from 'react'
import MyContext from '../context/MyContext';

const Images = () => {

    const {imageData}=useContext(MyContext);
  
    return (
        <div className='flex my-5'>
    {
        imageData.map((image)=>(
           <div key={image.id} className='box1'>
            <div className='box2'>
                <img src={image.largeImageURL} alt="" />
            </div>
           </div>
        ))
    }
    </div>
  )
}

export default Images
