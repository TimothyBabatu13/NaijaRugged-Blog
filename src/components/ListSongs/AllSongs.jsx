import SongList from "./SongList"
import { useState } from "react"
import App from "../../App"
import { useContext } from "react"

const AllSOngs = ()=>{
    
    const data = App.createContextHook;
    const context = useContext(data);
    console.log(context.realData)
    
    let Data = context.realData;
    const category = context.category;
   
    const searchFromData = (text)=>{
        const newData = [];
        for(let i = 0; i < Data.length; i++){
            if(Data[i].author.toLowerCase().match(text) || Data[i].title.toLowerCase().match(text)){
                newData.push(Data[i]);
            }
        }

        return newData;
    }

    const txt = context.searchName.toLowerCase();
    txt && (Data = searchFromData(txt));

    const [vote, setVote] = useState(Data)
    const [isVote, setIsVote] = useState(vote.map(item => ({status:false, voteNum: item.voteNum, id: item.id})));
    
    const updateData = (e, add)=>{
        setIsVote(prev =>{
            const data = prev.map(item =>{
                if(item.id === parseInt(e.target.id)){
                    return {
                        ...item,
                        status: !item.status,
                        voteNum: add ? item.voteNum + 1 : item.voteNum - 1
                    }
                }
                return item;
            })
            return data
        })
    }

    const upVote = (e)=> updateData(e, true)

    const downVote = (e)=> updateData(e, false)
    
    const listSong = Data.map((data)=>(
        // <Link to={`/view_song/${item.id}`} key={id}>
            <SongList
                key={data.id}
                category={category}
                id={data.id}
                banner={data?.data?.img}
                name={data?.data?.author}
                title={data?.data?.title}
                type={data?.data?.type}
                time={data?.data?.timePosted}
                // voteCount={isVote[id].voteNum}
                // upvote={!isVote[id].status ? upVote : downVote}
                darkMode={context?.mode}
                // showIcon={!isVote[id]?.status}
            />
        // </Link>
      ))

     if(!listSong.length){
        return <h1>Nothing in here</h1>
     }
 
    return(
       
        <>
            
            <div style={{"display":"flex", "justifyContent":"space-between", "alignItems":"center"}} className="top">
                <h5>Popular</h5>
                <a href="#" style={{"textDecoration":"none"}}>show all</a>
            </div>
            {listSong}
        </>
        
    )
}

export default AllSOngs