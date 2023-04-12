import "./index.css"
import { useState } from "react";
import starIcon from "../../assets/icon-star.svg"
import illustrationImg from "../../assets/illustration-thank-you.svg"

export const InteractiveRatingComponent = () => {
    const [rating,setRating] = useState(null)
    const [isSubmitted,setIsSubmitted] = useState(false)
    const getButtonStyle = (buttongRating) => {
        return buttongRating <= rating ? 
            {   backgroundColor: "hsl(217, 12%, 63%)",
                color: "hsl(216, 12%, 8%)"
            } :
            { 
                backgroundColor: "hsl(216, 12%, 8%)",
                color: "hsl(217, 12%, 63%)"    
            }
    }
    return (!isSubmitted ? <div class="container">
    <div class="icon-container">
      <img src={starIcon} alt="" />
    </div>
    <p>How did we do?</p>

  <p>Please let us know how we did with your support request. All feedback is appreciated 
    to help us improve our offering!
  </p>
  <div class="rating-button-container">
    <button style={getButtonStyle(1)} 
        onMouseEnter={() => {
           
            setRating(1)
            
        }}
        onClick={() => {
            if(rating === 1){
                setRating(null)
            } else{
                setRating(1)
            }
      
    }}>1</button>
    <button style={getButtonStyle(2)} 
        
        onMouseEnter={() => {
            setRating(2)
        }}
        onClick={() => {
            setRating(2)
    }}>2</button>
    <button style={getButtonStyle(3)} 
        onMouseEnter={() => {
            setRating(3)
         }}

        onClick={() => {
            setRating(3)
    }}>3</button>
    <button style={getButtonStyle(4)} 
    
    onMouseEnter={() => {
            setRating(4)
        }}
        onClick={() => {
            setRating(4)
    }}>4</button>
    <button style={getButtonStyle(5)} 
        onMouseEnter={() => {
            setRating(5)
        }}
        onClick={() => {
            setRating(5)
    }}>5</button>
  </div>
  

  <button onClick={()=>{
    setIsSubmitted(true)
  }}>Submit</button>
</div> : <div class="thank-you-container">
  <img src={illustrationImg}/>
  <p>You selected {rating} out of 5</p>
  <p>Thank you!</p>
  <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch</p>
</div>);
}