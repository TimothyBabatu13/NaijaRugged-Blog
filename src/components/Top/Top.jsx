import Banner from "./Banner";
import Circle from "./Circle";
import { useEffect, useState } from "react";
import App from "../../App";
import { useContext } from "react";

const Top = ()=>{
  const context = App.createContextHook;
  const Context = useContext(context);
  const category = Context.category;
  const Data = Context.data[0];
    
    const [number, setNumber] = useState(0)

    useEffect(()=>{
        const timeId = setTimeout(()=>{
          setNumber(prev =>{
            if(prev === Data.length - 1) return 0
            return prev + 1;
          })
          
        }, 5000)
        return ()=>{
          clearTimeout(timeId)
        }
        
      },[number])
      

    const innerHtml = Data.map((data, id)=>(
        <Banner 
          key={id}
          id={id}
          cover={data.img}
          title={data.title}
          artistImage={data.img}
          artistName={data.author}
          timePosted={data.timePosted}
          category={category}
        />
      ))
    
      const changeNumber = (e)=>{
        setNumber(parseInt(e.target.id))
      }
      const circle = Data.map((item, id)=>(
        <Circle
          key={id}
          id={id}
          changeNumber={changeNumber}
          color={id === number ? 
            "rgba(255, 0, 0, 0.651)" 
            : 
            "rgba(0, 0, 255, 0.555)"} 
        />
      ))

      
    return(
        <>
            <div>
                {innerHtml[number]}
            </div>
            <div className='circle--container' style={{"display":"flex", "alignItems":"center", "justifyContent":"center", "margin":"15px 0"}}>
                {circle}
            </div>
        </>
    )
}

export default Top;