const Circle = (props)=>{

return (
        <div
            id={props.id}
            onClick={props.changeNumber} 
            style={{ "height":"25px", "width": "25px","borderRadius":"50%", "background":`${props.color}`}}
        >
        </div>
    )
}
export default Circle

//rgba(0, 0, 255, 0.555)