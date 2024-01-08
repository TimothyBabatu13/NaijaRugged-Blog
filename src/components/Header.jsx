import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import App from "../App";
import { useContext, useRef, useState } from "react";
import searchIcon from "../assets/icons/search.svg";
 
const Header = (props)=>{
    const [text, setText] = useState("")
    const ref = useRef(null)
    const navigate = useNavigate();    
    const context = App.createContextHook;
    const Context = useContext(context);
    // console.log(Context.data)
    const handleChange = (e)=>{
        setText(e.target.value)
    }    
    const handleSubmit = ()=>{
        if(!text) return
        props.sendTextUp(text);
        setText("");
    }

    const navigateAndHandleProps = (e)=>{
        Context.handleChangeType(e)
        if(window.location.href.match("/dashboard")?.index) return;
        navigate("/")
    }

    //handle onFocus for the input box whenever users click on floating search Icon
    const handleFocus = () =>{
        const input = ref.current;
        input?.focus()
    }
    handleFocus();
    return(
        <>
            <header style={{"display":"flex", "justifyContent":"space-between", "alignItems":"center", "padding":"20px 0 0 0"}}>
                <Link to="/"><img className="header--logo" style={{"cursor":"pointer"}} src={logo} width="200px" alt="logo"/></Link>
                <div onClick={Context.changeMode}  style={{"cursor":"pointer", "display":"flex", "alignItems":"center"}}>
                    {Context.mode === "dark" ? <p style={{"fontSize":"23px"}}>&#9788;</p> : <p style={{"fontSize":"23px", "transform":"rotate(90deg)", "color":"white"}}>&#127769;</p> } 
                </div>
            
                {/* <img 
                    width="20px"
                    height="20px"
                    src={props.icon === "dark" ? sun : moon} 
                    onClick={props.changeMode} 
                    alt="icon"
                    style={{"cursor":"pointer"}}
                    className={props.className === "dark" ? "iconBlack" : null}
                /> */}
            </header>
            <div style={{"display":props.display ? "block" : "none", "position":"relative", "marginBottom":"10px"}}>
                <input 
                    style={{"width":"100%", "height": "25px"}} 
                    type="search" 
                    name="" 
                    id="iii" 
                    onChange={handleChange}
                    value={text}
                    ref={ref}
                />
                <img 
                    onClick={handleSubmit} 
                    style={{position:"absolute", "right":"10px", "top":"5px", "cursor":"pointer"}} 
                    src={searchIcon} 
                    alt="searchIcon" 
                />
            </div>
            <div style={{"display":"flex", "alignItems":"center", "paddingBottom":"20px"}} className="header--btn--container">
                <h3 onClick={props.changeType ? navigateAndHandleProps : null} className={Context.category === "albums" ? "button--active" : null}>Albums</h3>
                <h3 onClick={props.changeType ? navigateAndHandleProps : null} className={Context.category === "songs" ? "button--active" : null}>Songs</h3>
                <h3 onClick={props.changeType ? navigateAndHandleProps : null} className={Context.category === "mixtapes" ? "button--active" : null}>Mixtapes</h3>
                <h3 onClick={props.changeType ? navigateAndHandleProps : null} className={Context.category === "videos" ? "button--active" : null}>Videos</h3>
            </div>
        </>
    )
}

export default Header;
