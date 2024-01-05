import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import App from "../../App";
import RecommendedSong from "./RecommendedSong";
import Api from "../Api";

const ViewSong = ()=>{
    const [data, setData] = useState([]);
    const [relatedData, setRelatedData] = useState([]);
    const params = useParams();
    const {id} = params;

    useEffect(()=>{
        Api.readData("songs").then(x => {
            setRelatedData(x)
            return x;
          }).then(data =>{
            setData((data.filter(item => item.id === id))[0])
          });
    },[])
    
    const filterRelatedSongs = ()=>{
        const arrayOfData = [];
        for(let i = 0; i < relatedData.length; i++){
            if(relatedData[i]?.data.author.match(data?.data?.author) || relatedData[i]?.data.title.match(data?.data?.title)){
                arrayOfData.push(relatedData[i]);
            }
        }
        const dataToReturn = arrayOfData.filter(item => item.id !== id);
        return dataToReturn
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const context = App.createContextHook;
    const Context = useContext(context);


    const handleDownload = ()=>{
        const allSOng = document.querySelectorAll("div.album a");
        allSOng.forEach(item =>{
            item.click();
        })
    }

   
    
    const navigate = useNavigate();
// console.log(data)
    const handleNavigation = (e, id)=>{
       navigate(`/view/${e}/${id}`)
       setData(Data[id])
       window.scrollTo(0,0)
    }

    filterRelatedSongs().map(item=> console.log(item.data))
    // console.log(data[0]?.data.author)
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
                        banner={item?.data?.img}
                        name={item?.data?.author}
                        title={item?.data?.title}
                        type={item?.data?.type}
                        time={item?.data?.timePosted}
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
            <p>{data?.data.author} titled {data?.data.title}</p>
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
            {/* {RelatedSongs()} */}
        </div>
    }
    if(Context.category === "songs" || Context.category === "mixtapes"){
        return(
            data && <div>
                <p>{data?.data?.author} - {data?.data?.title}</p>
                <img style={{"marginTop":"10px", "marginBottom":"10px", "borderRadius":"10px", "minHeight":"250px"}} src={data?.data?.img} alt={data?.data?.title} width="100%"  />
                <h5 style={{"alignContent":"center", "marginBottom":"10px"}}>{data?.data?.desc}</h5>
                <div style={{"display":"flex", "justifyContent":"center"}}>
                    <audio controls src={data?.data?.link}></audio>
                </div>
                <a style={{"display":"flex","justifyContent":"center", "marginTop":"15px"}} download href={data?.data?.link}>Download</a>
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
            {/* {RelatedSongs()} */}
            </div>
            
            
           
        </>
    )
}

export default ViewSong;