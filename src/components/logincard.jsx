import { useState } from "react";

const Logincard = () => {
    const [username,setUsername] = useState("pagal");
    const [gmail,setGmail] = useState("pagal@gmail.com");
    const [password,setPassword] = useState("12345");
    const [userList,setUserList] = useState([]);

    const updateUsername = (e) =>{
        setUsername(e.target.value);
    }

    const updateGmail = (e) =>{
        setGmail(e.target.value);
    }

    const updatePassword = (e) =>{
        setPassword(e.target.value);
    }
    
    let usersOutput = []
    const submitter = () =>{
        document.getElementById("final").innerHTML = "submitted " + username + " " + gmail + " " + password;
        const newitem = {uname : username, mail : gmail , pass : password}; 
        setUserList(ul => [...ul,newitem]);
        console.log(userList);
        setGmail("");
        setPassword("");
        setUsername("");
    }

    return (
        <>
            <input value={username} type = "text" placeholder="Username" onChange={updateUsername}/>
            <input value={gmail} type="email" placeholder="Gmail" onChange={updateGmail}/>
            <input value={password} type = "password" placeholder="Password" onChange={updatePassword}/>
            <button onClick={submitter}>Submit</button>
            <ol>
                <li>
                {userList.map(
                (value,index)=> 
                    <ul key={index.toString+value.uname+value.pass}>
                        <li key={index.toString+value.uname}>{value.uname}</li>
                        <li key={index.toString+value.pass}>{value.pass}</li>
                        <li ky={index.toString+value.mail}>{value.mail}</li>
                    </ul>
                )}
                </li>
            </ol>
            <p id = "final"></p>
        </>
    );
}
export default Logincard;