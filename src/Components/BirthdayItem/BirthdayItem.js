const BirthdayItem = ( {birthdayData, onBirthdayDelete} ) => {
    const { id, name, birthdayDate, gifts, age} = birthdayData

    return (
        <div key={id} className='birthday-item'>
            <h3 className='birthday-name'>{name}'s birthday</h3>
            <span className='birthday-date'>Born: {birthdayDate}</span>
            <span className='birthday-age'>It's {name}'s {age}th birthday!</span>
            {gifts && <p className='birthday-gifts'>Possible gift: {gifts}</p>}
            <button onClick={() => onBirthdayDelete(id)}>Delete birthday</button>
        </div>
        
    )
}

export default BirthdayItem