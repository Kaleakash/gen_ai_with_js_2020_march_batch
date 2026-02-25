import { useState } from "react";


function Login() {
let [email, setEmail] = useState("");
let [password, setPassword] = useState("");
let [msg, setMsg] = useState("");

let handleSubmit = (e) => {
    e.preventDefault();
    if(email === "" || password === "") {
        setMsg("Please fill in all fields");
    } else if(email === "user@example.com" && password === "password123") {
        setMsg("Login successful");
    } else {
        setMsg("Invalid email or password");    
    }
}
    return(
        <div>
            <h2>Login page</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="email" value={email} 
                onChange={(e) => setEmail(e.target.value)} /><br/>
                <input type="password" placeholder="password" value={password} 
                onChange={(e) => setPassword(e.target.value)} /><br/>
                <button type="submit">Login</button>
            </form>
            {msg}
         </div>
    )
}
export default Login;