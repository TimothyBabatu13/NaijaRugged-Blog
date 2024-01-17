import DashboardSong from "./DashboardSong";
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import Api from "../Api";
import AddSong from "./AddSong";
import { doc, deleteDoc} from "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = (props)=>{

    const [userActive, setUserActive] = useState(false);
    const [data, setData] = useState([]);
    const navigate =  useNavigate()
    const auth = getAuth();
    const db = firebaseConfig.database;


   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserActive(true);
          Api.readData("songs").then(item => {
            console.log(item)
            setData(item)
        })
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
        toast.error("Deleting data...")
        const data = async () =>{
            await deleteDoc(doc(db, "songs", id))
            .then(res => {
                console.log("succesful");
                toast.success("Data succesfully deleted");
            })
            .catch(err => console.log("error ocured"));
        }
        data(id)

        

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
            <ToastContainer />
            <AddSong />
            {elements}
        </div>
    )
}

export default Dashboard;