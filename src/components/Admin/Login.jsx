import eye from "../../assets/icons/eye.svg";
import eyeSlash from "../../assets/icons/eye-slash.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Login = (props)=>{
    const db = firebaseConfig.database;
    
    const database = collection(db, "users");


    console.log(database)
    
    const [data, setData] = useState({
        email: "",
        password: "",
        isEye: false
    })
    
    const navigate = useNavigate();

    const handleChange = (e)=>{
        setData(prev =>({
            ...prev,
            [e.target.name]: e.target.value
        }   
        ))
    }

    const handleEye = ()=>{
        setData(prev => ({
            ...prev,
            isEye: !prev.isEye
        }
        ))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const {email, password} = data
        console.log(email, password)
        navigate("/dashboard")
        // console.log("ho")
        getDocs(database).then(x => console.log(x.docs.map(data=> data.data())))
    }
    
    return(
        <>
            <form onSubmit={handleSubmit} className="admin--form" action="">
                <div>
                    <input 
                        type="email" 
                        required 
                        name="email" 
                        autoComplete="false"
                        onChange={handleChange}
                        style={{"background":props.className === "dark" ? "#120f0f" : "white", "color": props.className === "dark" ? "white" : "black", "fontWeight":"bolder"}}
                    />
                </div>
                <div style={{"display":"flex", "alignItems":"center", "position":"relative"}}>
                    <input 
                        type={data.isEye ? "text" : "password"}
                        name="password"
                        required
                        onChange={handleChange}
                        style={{"background":props.className === "dark" ? "#120f0f" : "white", "color": props.className === "dark" ? "white" : "black", "fontWeight":"bolder"}}
                    />
                    <img 
                        src={data.isEye ? eye : eyeSlash} 
                        alt="eye icon"
                        autoComplete="false"
                        className={props.className === "dark" ? "iconBlack" : null} 
                        style={{"position":"absolute", "right":"20px", "cursor":"pointer"}}
                        onClick={handleEye}
                    />
                </div>
                <div className="button--container">
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}
export default Login;