import DashboardSong from "./DashboardSong";
import {useNavigate} from "react-router-dom"
import { useEffect, useRef } from "react";
import App from "../../App";
import { useContext } from "react";

import AddSong from "./AddSong";
// const contextHook = App.createContextHook;

// console.log(contextHook)
const Dashboard = (props)=>{
    const contextHook = App.createContextHook;
    

    const thhh = useContext(contextHook)
    const Data = thhh.data[0]
    
    const navigate =  useNavigate()
    const isActive = true;
    
    useEffect(()=>{
        if(!isActive){
            return navigate("/admin")
        }
    },[])

    
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