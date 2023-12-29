import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import {Suspense } from "react";
import Footer from "./components/Footer";
// import LazyLoad from "./LazyLoad";
// const SearchIcon = LazyLoad("./components/SearchIcon"); 
import searchIcon from "./assets/icons/search.svg";
import { useState } from "react";
import App from "./App";
import { useContext } from "react";
const Layout = (props)=>{
    const context = App.createContextHook;
    const Context = useContext(context);
    const [display, setDisplay] = useState(false);
    
    /**
     * This is what searchText is used for
     * This is the function that will be used to pull data and
     * display any neccessary thing to the user.
     * In short, job is just to fecth data from firebase and nothing else
     */
    const searchText = ()=>{
        
    }
    /**
     * This is what handleSubmit does
     * The information got from here will be used to search
     * for user preference and it will be used to display data.
     * The value is stored as e
     * e will now be used to search for music, artist or anything that matches what the user
     * searches 
     */
    const handleSubmit = (e)=>{
        console.log(e)
    }

    const displaySearch = ()=> {
        setDisplay(prev => !prev);
    };

    /**
     * This is what onChange does
     * onChange lists out names of artists that are on backend that match users input
     * or names of songs that match users inputs
     * The data got from here are then displayed somehow so users can click on them and then 
     * see the artist clicked songs sorting with date the artist released song
     */
    
    const onchange = (e)=> {
        if(e === "") return;
        return console.log(e)
    } 

    const sendDataUp = (e)=>{
        props.sendDataUp(e);
    }
    return(
        <>
            {/* {display && 
                <Suspense fallback={<h1>Loading...</h1>}>
                    <SearchIcon
                        searchIconClass={props.className}
                        handleSubmit={(e)=>handleSubmit(e)}
                        handleSearchText = {(e)=> onchange(e)}
                        cancel={()=> setDisplay(prev => !prev)}
                    />
                </Suspense>
            }
             */}
            <Header changeType={props.changeType} sendTextUp={sendDataUp} display={display} />
            {/* <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet />
            </Suspense> */}
            <Outlet />
            <div 
                style={{"position":"fixed", "bottom":"10px", "right":"10px", 
                        "cursor":"pointer", "height":"40px", "width":"40px",
                        "background":"red", "display":"flex", "alignItems":"center",
                        "justifyContent":"center", "borderRadius":"50px"
                        }}
                onClick={displaySearch}
                className="searchIcon"
            >
                <img 
                    src={searchIcon} 
                    className={props.searchIconClass === "dark" ? "iconBlack" : null } 
                    width="20px" 
                    height="20px"
                    alt="search icon" 
                />
            </div>
            <Footer />
        </>
    )
}

export default Layout;