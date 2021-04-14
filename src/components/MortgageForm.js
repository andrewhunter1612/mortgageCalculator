import { useState } from "react";
import Salary from './Salary'
import './Form.css'

const MortgageForm = ({getMortgageAllowed}) => {

    const [applicants, setApplicants] = useState(0)
    const [salary, setSalary] = useState(0)
    const [deposit, setDeposit] = useState(0)
    const [commitments, setCommitment] = useState(0)
    const [interest, setInterest] = useState(0.1)

    const handleApplicantsChange = (evt) => {
        let value = evt.target.value
        setApplicants(value)
    }

    const handleInterestChange = (evt) => {
        setInterest(evt.target.value)
    }

    const handleDepositChange = (evt) => {
        setDeposit(evt.target.value)
    }

    const handleCommitmentChange = (evt) => {
        setCommitment(evt.target.value)
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        const monthlyMoney = salary/12 - commitments
        console.log('monthly', monthlyMoney);
        const total = monthlyMoney * 12 * 3 
        const months = Math.ceil(total/monthlyMoney)
        const monthlyRepayment = total*(1+parseFloat(interest/12))/months

        console.log('total', monthlyRepayment);

        const property = parseInt(deposit) + parseInt(total)

        getMortgageAllowed({
            total: total,
            property: property,
            repayment: monthlyRepayment.toFixed(2),
            months: months
        })
    }

    const getSalary = (salary) => {
        setSalary(salary)
    }


    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div class="wrapper">
                    <div class="applicant">
                    <label htmlFor="one-person">1 Applicant</label>
                    <input type="radio" id="one-person" value={1} onChange={handleApplicantsChange} name="people"/>
                    </div>
                    
                    <div clss="applicant">
                    <label htmlFor="two-person">2 Applicants</label>
                    <input class="wrapper" type="radio" id="two-person" value={2} onChange={handleApplicantsChange} name="people"/>
                    </div>
                </div>
                
                
                <br/>
                <Salary getSalary={getSalary} number={applicants}/>
                <br/>

                <div class="deposit-form">
                <label  htmlFor="deposit">Enter deposit: </label>
                <input type="number" value={deposit} onChange={handleDepositChange} step="500"/>
                </div>
                <br/>

                <div class ="deposit-form">
                <label htmlFor="commitments">Other Monthly Commitments: </label>
                <input type="number" value={commitments} onChange={handleCommitmentChange} step="50"/>
                </div>

                <div class ="deposit-form">
                    <label htmlFor="interest">Interest Rate: </label>
                    <input type="number" name="interest" id="interest" step="0.1" value={interest} onChange={handleInterestChange} />
                </div>

                <br/>
                <div class="btn">
                    <input type="submit" />
                </div>
            </form>
        </>
    )

}

export default MortgageForm;