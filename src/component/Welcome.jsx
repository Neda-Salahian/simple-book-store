// import {  useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Welcome(){
   
    const [inputName, setInputName] = useContext(UserContext)

    const handleInput = (e) => {
        setInputName(e.target.value);
    }

    return(

        <>

        {inputName && (
        <p>Welcome, {inputName} ! </p>)
        }

        <div className="container-form">
        <label>Your name :

        <input type="text" value={inputName} onChange={handleInput} id="name-user" name="name"/>
        </label>
        </div>

        
        </>
    )
}

export default Welcome;