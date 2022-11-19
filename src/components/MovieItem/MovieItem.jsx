import { useState } from 'react'

// export const MovieItem = ({images, onCLick}) =>  {
   
    
     
//     return (
      
//            images.map(image => (
//                   <li onClick={()=>onCLick(image.id)} key={image.id} className="ImageGalleryItem"> 
// <img src= {image.largeImageURL} alt={image.tags}  className='MovieItemImage'

// />

//     </li>
            
          
//            ))
      
//     )
//            }
        
import React from 'react'

const MovieItem = ({
id,
title

}) => {
    
  return (
   <b>{title}</b>

  )
}

export default MovieItem



        // ImageGalleryItem.propTypes = {
        //     images: PropTypes.array.isRequired,
        //     onCLick: PropTypes.func.isRequired
        //       }
        