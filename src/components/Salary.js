import { useState, useEffect } from "react"
import './Salary.css'

const Salary = ({getSalary, number}) => {

    const [salary, setSalary] = useState(0)
    const [salaryTwo, setSalaryTwo] = useState(0)

    const handleSalaryTwoChange = (evt) => {
        setSalaryTwo(evt.target.value)
    }

    const handleSalaryChange = (evt) => {
        setSalary(evt.target.value)
    }

    useEffect(() => {
        const totalSalary = parseInt(salary) + parseInt(salaryTwo)
        getSalary(totalSalary)
    }, [salary, salaryTwo])

    

    if (number === 0){
        return null
    } else if (parseInt(number) === 1){
        return (
            <>
                <div class="salary">
                <label  htmlFor="salary" key="6">Enter salary: </label> 
                <input type="number" value={salary} onChange={handleSalaryChange} step="500" key="5"/>
                </div>
            </>
        )
    } else if (parseInt(number) === 2) {
        return (
            <div>
                <div class="salary">
                    <label  htmlFor="salary" key="4">Enter first salary: </label> 
                    <input type="number" value={salary} onChange={handleSalaryChange} step="500" key="1"/>
                </div>
                <div class="salary">
                    <label  htmlFor="salaryTwo" key="3">Enter second salary: </label> 
                    <input type="number" value={salaryTwo} onChange={handleSalaryTwoChange} step="500" key="2"/>
                </div>
            </div>
        )
    }


}
export default Salary