import Banner from "./Banner";
import Circle from "./Circle";
import { useEffect, useState } from "react";
import App from "../../App";
import { useContext } from "react";

const Top = ()=>{
  const [number, setNumber] = useState(0);

  const context = App.createContextHook;
  const Context = useContext(context);
  const category = Context.category;
 
  const Data = Context.realData;
  
  const DataToDisplay = ()=>{
    const arr = [];
    for(let i = 0; i < 6; i++){
      arr.push(Data[i])
    }
    return arr;
  }
  
    useEffect(()=>{
        const timeId = setTimeout(()=>{
          setNumber(prev =>{
            if(prev === DataToDisplay().length - 1) return 0
            return prev + 1;
          })
          
        }, 5000)
        return ()=>{
          clearTimeout(timeId)
        }
        
      },[number])
      
      const innerHtml = DataToDisplay().map((data)=>(
        <Banner 
          key={data?.id} 
          id={data?.id} 
          cover={data?.data?.img} 
          title={data?.data?.title}
          artistImage={data?.data?.img}
          artistName={data?.data?.author}
          timePosted={data?.data?.timePosted}
          category={category} 
        />
      ))

      const changeNumber = (e)=>{
        setNumber(parseInt(e.target.id))
      }
      const circle = DataToDisplay().map((item, id)=>(
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