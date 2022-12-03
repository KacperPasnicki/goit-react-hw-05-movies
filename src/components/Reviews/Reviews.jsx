import { useFetchReviews } from "hooks/useFetchReviews"
import { useParams } from "react-router-dom"
const Reviews= () => {
    const { movieId } = useParams();
    const { reviews } =useFetchReviews(movieId);

      
         if (!reviews)  return "...Loading";
         if (reviews.length === 0) return (
            "We are sorry. There are not any reviews :("
         )

      return (
        
     
       <ul>{reviews.map(review => {
        return (
            <li key={review.author}>
                <h5>{review.author}</h5>
           <span> {review.content}</span>


        </li>) })}
       </ul> 
       
      )}
    
      
    
    
    export default Reviews