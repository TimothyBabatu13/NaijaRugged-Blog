import Top from "./Top/Top";
import AllSOngs from "./ListSongs/AllSongs";
import App from "../App";
import { useContext } from "react";
const Home = ()=>{
    
    const context = App.createContextHook;
    const Context = useContext(context);

  

    // console.log(Context.data[0][1]);


    
    //pass down data from firebase and share it to the children
    //props.category will be used to filter what to be displayed here
    // console.log(props.category)
    return(
        <>
            <Top 
                category={Context.category} 
                darkMode={Context.mode}
            />
            <AllSOngs 
                category={Context.category}  
                darkMode={Context.mode}
            />
        </>
    )
}

export default Home