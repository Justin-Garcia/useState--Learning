import { useState } from "react";

function Login () {
    // currently AI generated code
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {username, password};
        setUser(userData);
        setUsername("");
        setPassword("");
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {user && JSON.stringify(user, null, 2)}
        </div>
    )
    }

    export default Login;