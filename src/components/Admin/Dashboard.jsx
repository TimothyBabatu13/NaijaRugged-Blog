import DashboardSong from "./DashboardSong";
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import Api from "../Api";
import AddSong from "./AddSong";

const Dashboard = (props)=>{

    const [userActive, setUserActive] = useState(false);
    const [data, setData] = useState([]);
    const navigate =  useNavigate()
    const auth = getAuth();
    
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserActive(true);
          Api.readData("songs").then(item => setData(item))
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
    
    const handleDelete = (id)=>{
        console.log("...initiating delete")

    }
    const handleEdit = (e)=>{
        console.log(e)
    }

    const elements = data.map((element)=>(
        <DashboardSong 
            key={element.id}
            banner={element?.data?.img}
            type={element?.data?.type}
            name={element?.data?.author}
            title={element?.data?.title}
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