import { useState } from "react";
import './MortgageAllowed.css'

const MortgageAllowed = ({mortgage, property, repayment, months}) => {

    const [adjusted, setAdjusted] = useState(repayment)

    const handleChange =(event)=> { 
           setAdjusted(event.target.value);
      }

    return (

        <>
        {/* <input 
      id="typeinp" 
      type="range" 
      min="0" max="10000" 
      value={repayment}
      onChange={handleChange}
      step="1"/> */}

        <p>Your maximum mortgage is £{mortgage}</p>
        <p>The maximum property price you can afford is £{property}</p>
        <p>Your monthly repayments will be £{repayment} per month for {months} months</p>

        
        </>

    )


}

export default MortgageAllowed;