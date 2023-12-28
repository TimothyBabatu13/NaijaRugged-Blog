import { useState, useRef } from "react";
const AddSong = ()=>{

    const [display, setDisplay] = useState(false);
    const ref = useRef(null);

    const [form, setForm] = useState({
        artist: "",
        title: "",
        songFile: "",
        imgURL: "",
        description: "",
        type: ""
    })

    const handleType = (e)=>{
        
        setForm(prev=>(
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    }
    console.log(form)

    const addSong = ()=>{
        setDisplay(prev => !prev)
    }

    //work on handleSubmit later. I havent achieved what I want.
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formArray = Object.entries(form);
        console.log(ref.current.files[0])
        
        setTimeout(1000, ()=>{
            console.log("sent...")
        })
        // console.log(form)
    }


    return(
        <div>
            {!display && <button style={{"background":"blue","border":"none", "padding":"10px 15px", "borderRadius":"8px","cursor":"pointer", "marginBottom":"10px"}} onClick={addSong}>Add Song</button>}
            {
            display && 
            <form action="">
                <input 
                    value={form.artist} 
                    onChange={handleType} 
                    type="text" 
                    placeholder="Artist Name" 
                    name="artist" 
                    id=""
                    style={{"width":"100%"}} 
                    className="form--input-add--song"
                />
                <input
                    onChange={handleType}
                    name="title" 
                    type="text" 
                    placeholder="Name of song" 
                    id="" 
                    style={{"width":"100%"}}
                    className="form--input-add--song"
                />
                <textarea 
                    value={form.description} 
                    onChange={handleType} 
                    type=""
                    placeholder="Description" 
                    name="description" 
                    id="" 
                    style={{width:"100%", "height":"fit-content", "overflowX":"hidden" ,"padding": "10px 15px", "borderRadius": "8px", "marginBottom":"10px", "fontWeight":"bold"}}
                ></textarea>
                <br />
                <div className="addSong--div"> 
                    <div>
                        <input onChange={handleType} type="radio" value="album" name="type" id="album" />
                        <label htmlFor="album">Album</label>
                    </div>
                    <div>
                        <input onChange={handleType} type="radio" value="song" name="type" id="song" />
                        <label htmlFor="song">Song</label>
                    </div>
                    <div>
                        <input onChange={handleType} type="radio" value="video" name="type" id="video" />
                        <label htmlFor="video">Video</label>
                    </div>
                    <div>
                        <input onChange={handleType} type="radio" value="mixtape" name="type" id="mixtape" />
                        <label htmlFor="mixtape">Mixtape</label>
                    </div>
                </div>
                {/* Put checkbox here to know if its album, music, video or something */}
                <div style={{"margin":"10px 0"}}>
                    <input  ref={ref} type="file" accept=".mp3, audio/*" name="" id="audioFile" />
                    <label htmlFor="audioFile">Audio file</label>
                </div>
                <div>
                    <input type="file" name="" id="imageFile" />
                    <label htmlFor="imageFile">Image File</label>
                </div>
                <div style={{"display":"flex", "alignItems":"center"}}>
                    <button style={{"display":"block", "marginRight":"20px" ,"marginTop":"10px", "padding":"10px 15px", "cursor":"pointer", "background":"blue", "border":"none", "borderRadius":"5px"}} onClick={handleSubmit} type="submit">Submit</button>
                    <button style={{"display":"block", "marginTop":"10px", "padding":"10px 15px", "cursor":"pointer", "background":"red", "color":"white" ,"border":"none", "borderRadius":"5px"}} onClick={()=> setDisplay(prev => !prev)}>Close</button>
                </div>
            </form>
            }
        </div>
    )
}

export default AddSong;