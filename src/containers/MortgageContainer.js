import MortgageForm from "../components/MortgageForm"
import MortgageAllowed from "../components/MortgageAllowed"
import { useState } from "react"
import './MortgageContainer.css'

const MortgageContainer = () => {

    const [mortgage, setMortgage] = useState(0)
    const [property, setProperty] = useState(0)
    const [repayment, setRepayment] = useState(0)
    const [months, setMonths] = useState(0)


    const getMortgageAllowed = (details) => {
        setMortgage(details.total)
        setProperty(details.property)
        setRepayment(details.repayment)
        setMonths(details.months)
    }

    return (
        <>
            <h1>Mortgage Calculator</h1>
            <MortgageForm getMortgageAllowed={getMortgageAllowed}/>
            <MortgageAllowed mortgage={mortgage} property={property} repayment={repayment} months={months}/>
        </>
    )

}

export default MortgageContainer
