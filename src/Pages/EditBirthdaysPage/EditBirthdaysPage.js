import { useState } from "react";
import BirthdayForm from "../../Components/BirthdayForm/BirthdayForm";
import BirthdayList from "../../Components/BirthdaysList/BirthdayList";
import Container from "../../Components/Container/Container"
import styled from "styled-components";

const Title = styled.h2 `
    color: rgba(0, 100, 200, 1);
    font-size: normal;
    font-weight: 300
    
    



`

console.clear()

function EditBirthdays () {

    const birthdaysList = [
        {
            id: 1,
            birthdayDate: '06-12',
            name: 'John Doe',
            gifts: 'Banana',
            age: '40'
        },
        {
            id: 2,
            birthdayDate: '06-13',
            name: 'Max Row',
            gifts: 'Peach',
            age: '30'
        },
        {
            id: 3,
            birthdayDate: '06-15',
            name: 'Moe Foe',
            gifts: 'Watermelon',
            age:'50'
        }
    ]

    const [birthdays, setBirthdays] = useState(birthdaysList);

    const createBirthdayHandler = (newBirthday) => setBirthdays(prevState => [newBirthday,...prevState])

    const deleteBirthdayHandler = (id) => {
        setBirthdays(prevState => {
            const newState = prevState.filter((birthday) => birthday.id !== id)

            return newState
        })
    }
    
    return (

        <Container>

            <Title>Create birthdays:</Title>

            <BirthdayForm onNewTask={createBirthdayHandler}/>

            <Title>Upcomming birthdays:</Title>

            <BirthdayList data={birthdays} onBirthdayDelete={deleteBirthdayHandler}/>
            
        </Container>
    )
}

export default EditBirthdays




