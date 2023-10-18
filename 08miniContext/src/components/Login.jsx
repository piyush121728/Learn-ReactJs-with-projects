import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    //Step 3 : We can use the useContext hook to access the data from UserContext provider
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>
    {
        e.preventDefault(); 
        setUser({username,password});
    }

    return (
        <div>
            <input type="text"
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
                {" "}
            <input  type="text"
                placeholder='password'
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {" "}
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login