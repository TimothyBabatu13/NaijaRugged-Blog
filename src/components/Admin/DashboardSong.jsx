// import clock from "../../assets/icons/clock.svg";
// import like from "../../assets/icons/hand-index-fill.svg"
import editBtn from "../../assets/icons/pencil.svg";
import deleteBtn from "../../assets/icons/trash.svg";

const DashboardSong = (props)=>{
    return(
        
            <div className="songList--container" style={{"display":"flex", "alignItems":"center"}}>
            <img style={{"marginRight":"15px", "borderRadius":"10px"}} height="90px" width="90px" src={props.banner} alt="song banner" />
            <div>
               <p>{props.type}</p>
               {props.name} - {props.title}
               <div style={{"display":"flex", "alignItems":"center", "marginTop":"10px"}}>
                
                <div style={{"display":"flex", "alignItems":"center"}}>
                    <img onClick={props.handleEdit} style={{"marginRight":"40px", "cursor":"pointer"}} src={editBtn} alt="edit icon" />
                    <img onClick={props.handleDelete} style={{"cursor":"pointer"}} src={deleteBtn} alt="delete icon" />
                </div>
               </div>
            </div>
        </div>
    
    )
}

export default DashboardSong;