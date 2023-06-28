const BirthdayItem = ( {birthdayData, onBirthdayDelete} ) => {
    const { id, name, birthdayDate, gifts, age} = birthdayData
    
    return (
        
        <div key={id} className='birthday-item'>
            {name && <div><h3 className='birthday-name'>{name}'s birthday</h3></div>}
            {name && age && <div><span className='birthday-age'>It's {name}'s {age}th birthday!</span></div>}
            {birthdayDate && <div><span className='birthday-date'>Born: {birthdayDate}</span></div>}
            {gifts && <div><p className='birthday-gifts'>Gift ideas: {gifts}</p></div>}
            <div><button className='birthday-gifts' onClick={() => onBirthdayDelete(id)}>Delete birthday</button></div>
        </div>
    )
}

export default BirthdayItem