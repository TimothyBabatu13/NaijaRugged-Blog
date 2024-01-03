import { useState } from "react";
import searchIcon from "../assets/icons/search.svg";
import cancel from "../assets/icons/x.svg";


const SearchIcon = (props)=>{

    const [text, setText] = useState("");
    
    console.log(text)
    const handleChange = (e)=>{
        setText(e.target.value);
    }

    
    return(
        <>
            
            <div style={{
                 "top":"20px", "left":"0", "display": "block",
                "width":"100%","height":"100vh","background":"blue", "opacity":"0.7", "margin":"0 auto", "marginLeft":"0.2%"
                
                }}>
                <div style={{"display":"flex", "alignItems":"center"}}>
                    <input 
                        width="100%" 
                        type="text" 
                        name="searchSong" 
                        placeholder="input artist's name or song title"
                        onChange={(e)=>{
                            handleChange(e);
                            console.log(e)
                            props.handleSearchText(text)
                        }}
                        // onKeyUp={()=>props.handleType(text)} 
                    />
                    <img 
                        src={searchIcon} 
                        width="20px" 
                        height="20px" 
                        alt="searchIcon"
                        onClick={()=>props.handleSubmit(text)}
                        // onClick={()=> console.log("This works sha")} 
                    />
                </div>

                <img src={cancel} 
                    className={props.searchIconClass === "dark" ? "iconBlack" : null } 
                    width="30px" 
                    height="30px" alt="cancel icon" 
                    style={{"position":"absolute", "right":"0", "top":"0","cursor":"pointer"}}
                    onClick={props.cancel} 
                />
            </div>
        </>
    )
}

export default SearchIcon;