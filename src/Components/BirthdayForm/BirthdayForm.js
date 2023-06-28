import { useState } from "react"
import { v4 as uuid } from "uuid"
import styled from "styled-components"

const InputButton = styled.input`
     background-color: transparent;
    font-size: 20px;
    border: 1px solid;
    padding: 10px 15px;
    border-radius: 10px;
    color:cadetblue;
    margin-top:10px;
    cursor: pointer;
    transition: backround-color 0.7s, color 0.5s;
    margin: 0px;

    &:hover {
        background-color: cadetblue;
        color: white;
        text-shadow: 1px 2px 2px rgba(128, 0, 0, 1);
    }
`

const FormStyle = styled.div `
    
    display: flex;
    flex-direction: row;
    /* align-items: */
    max-width: 50%;
    border: 2px;
    border-radius: 15px;
    text-align: center;
    gap: 20px;
    padding: 15px;
    background: transparent;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media (max-width:800px) {
    max-width: 100%;
   
    }


`
const Form = styled.form `
    display: flex;
    flex-direction: column;
    gap: 10px
`

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
        <Form  onSubmit={newBirthdayHandler}>
            <FormStyle className='form-control'>
                <label htmlFor='birthday-name'>Enter name:</label>
                <input type='text' id='birthday-name' name='birthday-name' value={name
                } onChange={nameInputHandler}/>
            </FormStyle>
            <FormStyle className='form-control'>
                <label htmlFor='birthday-date'>Enter birthday date:</label>
                <input type='date' id='birthday-date' name='birthday-date' value={birthdayDate} onChange={dateInputHandler}/>
            </FormStyle>
            <FormStyle className='form-control'>
                <label htmlFor='birthday-gifts'>Enter gift ideas:</label>
                <textarea id='birthday-gifts' name='birthday-gifts' value={gifts} onChange={giftsInputHandler}/>
            </FormStyle>
            <div className='form-control'>
                <InputButton type='submit' id='birthday-submit' name='birthday-submit' value='New birthday'/>
            </div>

        </Form>
    )
}

export default BirthdayForm

