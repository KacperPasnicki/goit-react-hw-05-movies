
export const MovieGallery = ({ videos }) => {
    
      
  
    
     
    return (
        
      <ul className="MovieGallery">
        {videos.map(video => {
    return (
        <li className="MovieItem"
        id={video.id}
          key={video.id}>
          {video.title}
        </li>
        )
          })}
        
        
         </ul>


    )

  }