import { useState, useRef, useContext } from "react";
import Api from "../Api";
import App from "../../App";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AddSong = ()=>{
    const context = App.createContextHook;
    const Context = useContext(context);

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
    // console.log(form)

    const addSong = ()=>{
        setDisplay(prev => !prev)
    }

    const handleSelectSongFile = (e) =>{
        // console.log(e.target.files[0])
        setForm(prev => ({
            ...prev,
            songFile: e.target.files[0]
        }))
    }
    const handleSelectImage = (e)=>{
        // console.log(e.target.files[0])
        setForm(prev => ({
            ...prev,
            imgURL: e.target.files[0]
        }))
    }

    const sendMusicFile = (getData)=>{
        Api.uploadFile(form.songFile, (audioLink)=>{
            // console.log(getData);
            const newData = {
                ...getData,
                songFile: audioLink
            }
            const dataToSend = {
                author: newData.artist,
                title: newData.title,
                timePosted: new Date().getDay(),
                voteNum: 1000,
                desc: newData.description,
                link: newData.songFile,
                img: newData.imgURL,
                typeof: newData.type
            }
            //author: "Omah Lay",
        //     title: "What Have We Done(WHWD)",
        //     timePosted: "12:40",
        //     voteNum: 1,
        //     id: 0,
        //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto sequi tempora, voluptatum voluptas vel voluptates ex corporis culpa omnis nemo quaerat, assumenda modi sint molestiae! Veniam doloremque provident impedit cumque enim, temporibus, facilis voluptatibus accusantium totam ut quo quis mollitia nostrum soluta nihil libero ipsam odit similique unde incidunt consequatur! Libero earum expedita, eius laudantium animi inventore doloribus nobis praesentium corporis id nulla quidem ad omnis dolore ducimus. Ipsum ut dignissimos corrupti praesentium nesciunt temporibus voluptatum, fugiat laboriosam eveniet quia aliquid animi, fugit vel asperiores eum eos repellendus ea odit dolore voluptate quidem veniam, sequi ipsam. Magnam, ea ratione.",
        //     tracks: [
        //         {
        //         name: "ggodly",
        //         link: "",
        //         id: 0
        //     },
        //     {
        //         name: "Godly",
        //         link: "",
        //         id: 1
        //     },
        // ]}
            Api.sendData(form.type, dataToSend);
            toast.success("data sent succesfully")
        })
        
    }
    //work on handleSubmit later. I havent achieved what I want.
    const handleSubmit =  (e)=>{
        e.preventDefault();
        toast.error("This is a toast")
        // const formArray = Object.fromEntries(form);
        // const formArray = Object.values(form);
        // console.log(formArray);
        // const formArrayLength = formArray.filter(item => item.trim() === "").length;

        // if(formArrayLength) return
        // console.log("Hi")

        // console.log(form)
        // console.log(ref.current.files[0])
        // console.log(formArray)
        Api.uploadFile(form.imgURL, (imgLink)=>{
            toast.error("Uploading data to backend...Do not press anything")
            // console.log(imgLink)
            const dataToSend = {
                artist: form.artist,
                title: form.title,
                songFile: "",
                imgURL: imgLink,
                description: form.description,
                type: form.type
            }
            sendMusicFile(dataToSend)
        })
        //     console.log("sent...")
        // })
        // console.log(form)
        // Api.sendData(Context.category, {
        //     author: "Omah Lay",
        //     title: "What Have We Done(WHWD)",
        //     timePosted: "12:40",
        //     voteNum: 1,
        //     id: 0,
        //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto sequi tempora, voluptatum voluptas vel voluptates ex corporis culpa omnis nemo quaerat, assumenda modi sint molestiae! Veniam doloremque provident impedit cumque enim, temporibus, facilis voluptatibus accusantium totam ut quo quis mollitia nostrum soluta nihil libero ipsam odit similique unde incidunt consequatur! Libero earum expedita, eius laudantium animi inventore doloribus nobis praesentium corporis id nulla quidem ad omnis dolore ducimus. Ipsum ut dignissimos corrupti praesentium nesciunt temporibus voluptatum, fugiat laboriosam eveniet quia aliquid animi, fugit vel asperiores eum eos repellendus ea odit dolore voluptate quidem veniam, sequi ipsam. Magnam, ea ratione.",
        //     tracks: [
        //         {
        //         name: "ggodly",
        //         link: "",
        //         id: 0
        //     },
        //     {
        //         name: "Godly",
        //         link: "",
        //         id: 1
        //     },
        // ]})
    }

    return(
        <div>
            <ToastContainer position="top-right" />
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
                    <input onChange={handleSelectSongFile}  ref={ref} type="file" accept=".mp3, audio/*" name="" id="audioFile" />
                    <label htmlFor="audioFile">Audio file</label>
                </div>
                <div>
                    <input onChange={handleSelectImage} type="file" name="" id="imageFile" />
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