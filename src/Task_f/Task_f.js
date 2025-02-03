import React from 'react';
import { useState } from 'react';

export default function Task_f() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleFormUsername = (e) => {
        
        setUsername(e.target.value);

    }



    const handleFormEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleFormPassword = (e) => {
        setPassword(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
      

        console.log(username);
        console.log(email);
        console.log(password);
        

    }


    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}

                        onChange={handleFormUsername}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={handleFormEmail}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={handleFormPassword}
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-2" >
                    Submit
                </button>
            </form>


        </>
    )
}
