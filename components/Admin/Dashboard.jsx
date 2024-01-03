import DashboardSong from "./DashboardSong";
import {useNavigate} from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import App from "../../App";
import { useContext } from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";

import AddSong from "./AddSong";
// const contextHook = App.createContextHook;

// console.log(contextHook)
const Dashboard = (props)=>{
    const [userActive, setUserActive] = useState(false);
    const navigate =  useNavigate()
    const auth = getAuth();

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid)
          setUserActive(true)
          // ...
        } else {
          setUserActive(false);
          return navigate("/admin")
        }
      });
   },[])
if(!userActive){
    return <h1>Loading</h1>
}
    const contextHook = App.createContextHook;
    

    const thhh = useContext(contextHook)
    const Data = thhh.data[0]
    
    
    
    const handleDelete = (e)=>{
        console.log("...initiating delete")

    }
    const handleEdit = (e)=>{
        console.log(e)
    }

    const elements = Data.map((element, id)=>(
        <DashboardSong 
            key={id}
            banner={element.img}
            type={element.type}
            name={element.author}
            title={element.title}
            darkMode={props.darkMode}
            handleEdit = {()=>handleEdit(element.id)}
            handleDelete = {()=>handleDelete(element.id)}
        />
    ))
    
    // console.log(props.category)
    return(
        <div>
            <AddSong />
            {elements}
        </div>
    )
}

export default Dashboard;