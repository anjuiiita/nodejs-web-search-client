import { useState, useEffect } from "react";
import Axios from 'axios';

const userAuthenticated = () => {
    Axios.get("http://localhost:3001/isUserAuth", {
        headers: {
            "x-access-token": localStorage.getItem("token"),
        }
    }).then((response) => {
        console.log(response);
    });
}

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);

    Axios.defaults.withCredentials = true;

    const validateUser = () => {
        Axios.post("http://localhost:3001/login", {
            userName: userName,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(false);
            } else {
                localStorage.setItem("token", response.data.token);
                setLoginStatus(true);

            }
            
        }, (error) => {
            console.log(error);
            setLoginStatus(false)
        });


    }

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginStatus(true);
            }
        })
    },[])

    return (
        <div className="Login">
            <div className="information">
                <input type="text" placeholder="username.."
                    onChange={(event) => {
                        setUserName(event.target.value);

                    }}
                />
                <input type="password" placeholder="password.."
                    onChange={(event) => {
                        setPassword(event.target.value);

                    }}
                />
                <button onClick={validateUser} >Login</button>
            </div>
            {loginStatus && (
                <button onClick={userAuthenticated}>checkIfAuthenticated</button>
            )}
        </div>
    );
}

export default Login;