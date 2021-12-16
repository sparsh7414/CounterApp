import React, { useState } from 'react'
import "./CounterComponent.css"
function CounterComponent() {
    const [value,setValue]=useState(1);

    const handleLikes = () => {
        setValue(value + 1);
    }

    const handleDisLikes = () => {
        if(value > 0)
        {
            setValue(value - 1);
        }
        else
        {
            alert("Your value is less than 0.")
            setValue(0);
        }
    }

    return (
        <div>
            <div className="main__div"> 
                <div className="center__div">
                    <h1>{value}</h1>
                    <div className="btn_div">
                        <button onClick={handleLikes}>Like</button>
                        <button onClick={handleDisLikes}>DisLike</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterComponent
