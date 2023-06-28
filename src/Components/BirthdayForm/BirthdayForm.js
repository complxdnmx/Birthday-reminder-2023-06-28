import { useState } from "react"
import { v4 as uuid } from "uuid"



const BirthdayForm = ( {onNewTask} ) => {

    const [name, setName] = useState('')
    const [gifts, setGifts] = useState('')
    const [birthdayDate, setBirthdayDate] = useState('')
    

    const nameInputHandler = (event) => setName(event.target.value)
    const giftsInputHandler = (event) => setGifts(event.target.value)      
    const dateInputHandler = (event) => setBirthdayDate(event.target.value)

    const newBirthdayHandler = (event) => {
        event.preventDefault()

        const date = new Date()
        const currentYear = date.getFullYear()
        const birthdayDateYear = birthdayDate.toString().slice(0,4)
        const age = Number(currentYear) - Number(birthdayDateYear) + 1
        const birthdayDateMonthDay = birthdayDate.toString().slice(5)
    
        const newBirthday = {
            id: uuid(), 
            birthdayDate: birthdayDateMonthDay,
            name: name,
            age: age,
            gifts: gifts,
        }

        onNewTask(newBirthday)

        setName('')
        setGifts('')
        setBirthdayDate('')
    }
    
    return (
        <form onSubmit={newBirthdayHandler}>
            <div className='form-control'>
                <label htmlFor='birthday-name'>Enter name:</label>
                <input type='text' id='birthday-name' name='birthday-name' value={name
                } onChange={nameInputHandler}/>
            </div>
            <div className='form-control'>
                <label htmlFor='birthday-date'>Enter birthday date:</label>
                <input type='date' id='birthday-date' name='birthday-date' value={birthdayDate} onChange={dateInputHandler}/>
            </div>
            <div className='form-control'>
                <label htmlFor='birthday-gifts'>Enter gifts:</label>
                <textarea id='birthday-gifts' name='birthday-gifts' value={gifts} onChange={giftsInputHandler}/>
            </div>
            <div className='form-control'>
                <input type='submit' id='birthday-submit' name='birthday-submit' value='New birthday'/>
            </div>

        </form>
    )
}

export default BirthdayForm

