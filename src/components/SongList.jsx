import clock from "../assets/icons/clock.svg";
import like from "../assets/icons/hand-index-fill.svg"
const SongList = (props)=>{
   //&#128078;
    return(
        <div className="songList--container" style={{"display":"flex", "alignItems":"center"}}>
            <img style={{"marginRight":"15px", "borderRadius":"10px"}} height="90px" width="90px" src={props.banner} alt="song banner" />
            <div>
               <p>{props.type}</p>
               {props.name} - {props.title}
               <div style={{"display":"flex", "alignItems":"center", "marginTop":"10px"}}>
                <div style={{"display":"flex", "alignItems":"center", "marginRight":"10px"}}>
                    <img className={props.darkMode === "dark" ? "iconBlack" : "null"} style={{"marginRight":"10px"}} src={clock} alt="clock icon" />
                    {props.time}
                </div>
                <div style={{"display":"flex", "alignItems":"center"}}>
                    <img className={props.darkMode === "dark" ? "iconBlack" : "null"} style={{"marginRight":"10px", "cursor":"pointer"}} id={props.id} onClick={props.upvote} src={like} alt="like button" />
                    {props.voteCount}
                </div>
               </div>
            </div>
        </div>
    )
}

export default SongList;