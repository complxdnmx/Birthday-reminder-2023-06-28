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

        const day = date.getDate().toString().padStart(2,'0')
        const month = (date.getMonth() + 1).toString().padStart(2,'0')
        const year = date.getFullYear()
        const birthdayDateYears = birthdayDate.toString().slice(0,4)
        const age = Number(year) - Number(birthdayDateYears) + 1
        

        const newBirthday = {
            id: uuid(), //Math.random(), geriau biblioteka naudot uidd
            birthdayDate: birthdayDate,
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
                <label htmlFor='birthday-date'>Enter birthday:</label>
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

