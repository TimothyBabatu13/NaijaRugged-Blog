import eye from "../../assets/icons/eye.svg";
import eyeSlash from "../../assets/icons/eye-slash.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


const Login = (props)=>{
    
    const [data, setData] = useState({
        email: "",
        password: "",
        isEye: false
    })
    
    const navigate = useNavigate();

    const auth = getAuth();



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
        
        // console.log("ho")
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
            navigate("/dashboard")
        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)
        });


        
    }
    
    return(
        <>
            <ToastContainer />
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