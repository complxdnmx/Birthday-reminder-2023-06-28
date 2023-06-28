import React from "react";
import BirthdayItem from "../BirthdayItem/BirthdayItem";

const BirthdayList = ( {data, onBirthdayDelete } ) => {
    
    return (
        <div className="birthday-list">
            {data.map((birthday) => {
                return (
                   <BirthdayItem key={birthday.id} birthdayData={birthday} onBirthdayDelete={onBirthdayDelete}/>
                )}
            )}
        </div>

    )
}

export default BirthdayList