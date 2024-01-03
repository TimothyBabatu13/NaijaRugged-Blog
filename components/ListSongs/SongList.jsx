import { Link } from "react-router-dom";
const SongList = (props)=>{
    // console.log(props)
    return(
        <div className="songList--container" style={{"display":"flex", "alignItems":"center"}}>
            <Link onClick={props.handleNavigate} to={`/view/${props.category}/${props.id}`}><img style={{"marginRight":"15px", "borderRadius":"10px"}} height="90px" width="90px" src={props.banner} alt="song banner" /></Link>
            <div>
               {/* <p>{props.type}</p> */}
               <Link className="songList--container--second--a" style={{"color":"white"}} to={`/view/${props.category}/${props.id}`}>{props.name} - {props.title}</Link>
               <div style={{"display":"flex", "alignItems":"center", "marginTop":"10px"}}>
                <div className="time--posted" style={{"display":"flex", "alignItems":"center", "marginRight":"10px"}}>
                    <p>&#128345;</p>
                    {/* <img width="15px" height="15px" className={props.darkMode === "dark" ? "iconBlack" : "null"} style={{"marginRight":"10px"}} src={clock} alt="clock icon" /> */}
                    {props.time}
                </div>
                <div className="no--of-votes" style={{"display":"flex", "alignItems":"center"}}>
                    {/* <img width="15px" height="15px" className={props.darkMode === "dark" ? "iconBlack" : "null"} style={{"marginRight":"10px", "cursor":"pointer"}} id={props.id} onClick={props.upvote} src={like} alt="like button" /> */}
                    {/* <p style={{"cursor":"pointer"}}> {props.darkMode === "dark" : &#128077; ? &#12807;}&#128077;</p> */}
                    {props.showIcon ? <p id={props.id} onClick={props.upvote} style={{"cursor":"pointer"}}>&#128077;</p> : <p id={props.id} onClick={props.upvote} style={{"cursor":"pointer"}}>&#128078;</p>}
                    {/* <p>{icon}</p> */}
                    {props.voteCount}
                </div>
               </div>
            </div>
        </div>
    )
}

export default SongList;