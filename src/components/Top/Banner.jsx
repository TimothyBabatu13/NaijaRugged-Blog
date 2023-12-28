import { useState } from "react";
import { Link } from "react-router-dom";
// import clock from "../../assets/icons/clock.svg";
const Banner = (props)=>{
    const [show, setShow] = useState(false);
    // console.log(props)

    const handleOver = ()=> {
        return props.title.length >= 30 ? setShow(prev => !prev) : null;
    }
    const handleOut = ()=> handleOver()
    return(
        <section className="banner--section" style={{"background":`url(${props.cover}) 0% 0% / 100%`,"width":"100%", "minHeight":"60vh", "position":"relative"}}>
             <div className="glassEffect">
                <Link to={`/view/${props.category}/${props.id}`}>
                    <h3 onMouseOver={handleOver} onMouseOut={handleOut} style={{"marginBottom":"10px","cursor":"pointer", "position":"relative"}}>
                        {props.title.length >= 30 ? `${props.title.slice(0, 25)}...`: props.title}
                        {show && 
                            <div style={{"fontSize":"13px", "pointerEvents":"none", "position":"absolute", "top":"-30px"}}>
                                {props.title}
                            </div>
                        }
                    </h3>
                </Link>
                <div style={{"display":"flex", "justifyContent":"space-between", "alignItems":"center"}}>
                    <div style={{"display":"flex", "justifyContent":"space-between", "alignItems":"center"}}>
                    <img 
                        // src={props.artistImage}
                        src={props.artistImage} 
                        alt="artist Image"
                        height="40px"
                        width="40px"
                        style={{"marginRight":"10px"}}
                    />
                        <p className="artist--name">{props.artistName.length >= 10 ? `${props.artistName.slice(0, 9)}...`: props.artistName}</p>
                    </div>
                    <div style={{"display":"flex", "alignItems":"center"}}>
                        <p style={{"marginRight":"10px"}}>&#128345;</p>
                        {/* <img  src={clock} alt="time icon" /> */}
                        {props.timePosted}
                    </div>
                </div>
             </div>
        </section>
    )
}

export default Banner;