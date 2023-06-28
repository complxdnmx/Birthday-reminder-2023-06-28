import styled from "styled-components"

const Button = styled.button`
     background-color: transparent;
    font-size: 20px;
    width: 50%;
    border: 1px solid;
    padding: 5px 7px;
    border-radius: 10px;
    color:cadetblue;
    margin-top:10px;
    cursor: pointer;
    transition: backround-color 0.3s, color 0.3s;

    &:hover {
        background-color: cadetblue;
        color: white;
        
    }
`

const CardStyle = styled.div `
    
    border: 2px;
    border-radius: 15px;
    text-align: center;
    gap: 20px;
    padding: 15px;
    background: transparent;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`

const BirthdayItem = ( {birthdayData, onBirthdayDelete} ) => {
    const { id, name, birthdayDate, gifts, age} = birthdayData

    return (
        
        <CardStyle key={id} className='birthday-item'>
            {name && <div><h3 className='birthday-name'>{name}'s birthday</h3></div>}
            {name && age && <div><span className='birthday-age'>It's {name}'s {age}th birthday!</span></div>}
            {birthdayDate && <div><span className='birthday-date'>Born: {birthdayDate}</span></div>}
            {gifts && <div><p className='birthday-gifts'>Gift ideas: {gifts}</p></div>}
            <div><Button className='birthday-gifts' onClick={() => onBirthdayDelete(id)}>Delete</Button></div>
        </CardStyle>
    )
}

export default BirthdayItem