import { Link } from "react-router-dom";
const Error = ()=>{
    return(
        <> 
            <h1>Error 404. Page does'nt exit.</h1>
            <p style={{"textAlign":"center"}}>
                <Link style={{"padding":"10px 15px", "background":"blue","display":"inline-block", "marginTop":"15px", "color":"white", "borderRadius":"5px"}} to={"/"}>Home</Link>
            </p>
        </>
    )
}

export default Error;