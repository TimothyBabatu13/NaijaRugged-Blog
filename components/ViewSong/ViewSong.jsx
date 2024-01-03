import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import App from "../../App";
import RecommendedSong from "./RecommendedSong";

const ViewSong = (props)=>{
    const context = App.createContextHook;
    const Context = useContext(context);
    
    const Data = Context.data[0]
    const params = useParams();
    const {id, type} = params;
    
    const getInformation = ()=>{
        props.handleStop()
    }
    getInformation()

    const handleDownload = ()=>{
        const allSOng = document.querySelectorAll("div.album a");
        allSOng.forEach(item =>{
            item.click();
        })
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const [data, setData] = useState(Data[id]);

    const filterRelatedSongs = ()=>{
        const arrayOfData = [];
        for(let i = 0; i < Data.length; i++){
            if(Data[i].author.match(data.author) || Data[i].title.match(data.title)){
                arrayOfData.push(Data[i]);
            }
        }
        const dataToReturn = arrayOfData.filter(item => parseInt(item.id) !== parseInt(id))
        return dataToReturn;
    }

    const navigate = useNavigate();

    const handleNavigation = (e, id)=>{
       navigate(`/view/${e}/${id}`)
       setData(Data[id])
       window.scrollTo(0,0)
    }

    
    const RelatedSongs = ()=>{
        const result = filterRelatedSongs();
        return(
            <div>
                {result.map(item =>(
                    <RecommendedSong
                        key={item.id}
                        handleNavigate={()=>handleNavigation(Context.category, item.id)}
                        category={Context.category}
                        id={item.id}
                        banner={item?.img}
                        name={item?.author}
                        title={item?.title}
                        type={item?.type}
                        time={item?.timePosted}
                        // voteCount={isVote[id].voteNum}
                        // upvote={!isVote[id].status ? upVote : downVote}
                        darkMode={context?.mode}
                    // showIcon={!isVote[id]?.status}
                />
                ))}
            </div>
            
        )
    }
    
    if(Context.category === "albums"){
        return <div className="album">
            <p>{data.author} titled {data.title}</p>
            <img style={{"marginTop":"10px", "marginBottom":"10px", "borderRadius":"10px", "minHeight":"250px"}} src={data.img} alt={data.title} width="100%"  />
            <h5 style={{"alignContent":"center", "marginBottom":"10px"}}>{data.desc}</h5>
            
            <p>Here is the list of the tracks in there with there download link</p>
            {
                data?.tracks?.map(item=>(
                    <div style={{"display":"flex", "alignItems":"center", "justifyContent":"space-between"}} key={item.id}>
                        <p>{item.name}</p>
                        <a href={item.link} download={true}>Download</a>
                    </div>
                ))
            }
            <button onClick={handleDownload} style={{"margin":"auto", "marginTop":"15px", "display":"flex"}}>Download All Tracks</button>
            {RelatedSongs()}
        </div>
    }
    if(Context.category === "songs" || Context.category === "mixtapes"){
        return(
            <div>
                <p>{data.author} titled {data.title}</p>
                <img style={{"marginTop":"10px", "marginBottom":"10px", "borderRadius":"10px", "minHeight":"250px"}} src={data.img} alt={data.title} width="100%"  />
                <h5 style={{"alignContent":"center", "marginBottom":"10px"}}>{data.desc}</h5>
                <div style={{"display":"flex", "justifyContent":"center"}}>
                    <audio controls src={data.link}></audio>
                </div>
                <a style={{"display":"flex","justifyContent":"center", "marginTop":"15px"}} download href={data.link}>Download</a>
                {RelatedSongs()}
            </div>
        )
    }
    return(
        <>
            <div style={{}}>   
            {/* <h1>{data.title}</h1> */}
            <img style={{"marginTop":"15px"}} width="100%" src={data.img} alt={data.desc} />
            {data.dec}
            <a style={{"display":"block", "marginTop":"10px", "textAlign":"center"}} download href={data.link}>Download</a>
            {RelatedSongs()}
            </div>
            
            
           
        </>
    )
}

export default ViewSong;