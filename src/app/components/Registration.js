import { useState } from "react";
import Axios from 'axios';


function Registration() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    //const [confirmedPassword, setConfirmedPassword] = useState("")
    const [registerStatus, setRegisterStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const addUser = () => {
        Axios.post("http://localhost:3001/register", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            userName: userName,
            password: password,
            //confirmedPassword: confirmedPassword,
        }).then((response) => {
            setRegisterStatus(response.data.message)
        }, (error) => {
            console.log(error);
            setRegisterStatus(error.data.err)
        });
    }


    return (
        <div className="Registration">
            <div className="information">
                <label>FirstName:</label>
                <input type="text"
                    onChange={(event) => {
                        setFirstName(event.target.value);

                    }}
                />

                <label>LastName:</label>
                <input type="text"
                    onChange={(event) => {
                        setLastName(event.target.value);

                    }}
                />

                <label>Email:</label>
                <input type="text"
                    onChange={(event) => {
                        setEmail(event.target.value);

                    }}
                />

                <label>Phone Number:</label>
                <input type="text"
                    onChange={(event) => {
                        setPhoneNumber(event.target.value);

                    }}
                />

                <label>User Name:</label>
                <input type="text"
                    onChange={(event) => {
                        setUserName(event.target.value);

                    }}
                />

                <label>Password:</label>
                <input type="text"
                    onChange={(event) => {
                        setPassword(event.target.value);

                    }}
                />

                {/* <label>Confirm Password:</label>
                <input type="pasword"
                    onChange={(event) => {
                        setConfirmedPassword(event.target.value);

                    }}
                />   */}
                <button onClick={addUser}>Register</button>
            </div>
            <div>
                <h1>{registerStatus}</h1>
            </div>
        </div>
    );
}



export default Registration;