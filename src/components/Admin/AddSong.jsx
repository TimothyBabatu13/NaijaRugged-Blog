import { useState, useRef, useContext } from "react";
import Api from "../Api";
import App from "../../App";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RenderSongFIleInput from "./RenderSongFIleInput";
import { Form } from "react-router-dom";
import {getStorage, uploadBytesResumable, ref, getDownloadURL} from "firebase/storage";

const AddSong = ()=>{
    const context = App.createContextHook;
    const Context = useContext(context);
    const [display, setDisplay] = useState(false);
    const [listOfTrack, setListOfTrack] = useState(['a']);
    const [form, setForm] = useState({
        artist: "",
        title: "",
        songFile: [],
        imgURL: "",
        description: "",
        type: ""
    })

    const handleType = (e)=>{
        
        setForm(prev=>(
            {
                ...prev,
                [e.target.name]: `${e.target.value}`
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
            songFile: [...prev.songFile, e.target.files[0]]
        }));
    }
  
    const handleSelectImage = (e)=>{
        // console.log(e.target.files[0])
        setForm(prev => ({
            ...prev,
            imgURL: e.target.files[0]
        }))
    }
    const upLoadMusic = (data, doThis)=>{
        const storage = getStorage();
        const storageRef = ref(storage, data?.name);
        const uploadTask = uploadBytesResumable(storageRef, data);
        
        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
            console.log(error)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("succesful", downloadURL)
            doThis(downloadURL)
            });
        }
        );
    }

    const upLoadImage = (data, doThis)=>{
        const storage = getStorage();
        const storageRef = ref(storage, data?.name);
        const uploadTask = uploadBytesResumable(storageRef, data);
        
        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
            console.log(error)
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("succesful", downloadURL)
            doThis(downloadURL)
            });
        }
        );
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
    const addMoreSong = (e)=>{
        e.preventDefault();
        setListOfTrack(prev => [...prev, "a"])
    }
 
    const upLoadAll = (e)=>{

        e.preventDefault();
        const u = [];
        let img
        form.songFile.forEach(item =>{
            toast.error("Uploading data to backend...Do not press anything");
            upLoadMusic(item, (downloadURL)=>{
                upLoadImage(form.imgURL, (e)=> img = e)
                u.push(downloadURL)
                const dataToSend = {
                    author: form.artist,
                    title: form.title,
                    timePosted: new Date().getDay(),
                    voteNum: 1000,
                    desc: form.description,
                    link: u,
                    typeof: form.type,
                    img
                }
                Api.sendData(form.type, dataToSend)
            })
        })
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
                        <input onChange={handleType} type="radio" value="albums" name="type" id="album" />
                        <label htmlFor="album">Album</label>
                    </div>
                    <div>
                        <input onChange={handleType} type="radio" value="songs" name="type" id="song" />
                        <label htmlFor="song">Song</label>
                    </div>
                    <div>
                        <input onChange={handleType} type="radio" value="videos" name="type" id="video" />
                        <label htmlFor="video">Video</label>
                    </div>
                    <div>
                        <input onChange={handleType} type="radio" value="mixtapes" name="type" id="mixtape" />
                        <label htmlFor="mixtape">Mixtape</label>
                    </div>
                </div>
                <div>
                    {
                        listOfTrack.map((item, id) =>(<RenderSongFIleInput key={id} handleSelectSongFile={handleSelectSongFile}/>))
                    }
                    {form.type === "albums" ? <button style={{"display":"inline"}} onClick={addMoreSong}>Add More Song</button> : <></>} 
                </div>
                
                <div>
                    <input onChange={handleSelectImage} type="file" name="" id="imageFile" />
                    <label htmlFor="imageFile">Image File</label>
                </div>
                <div style={{"display":"flex", "alignItems":"center"}}>
                    <button style={{"display":"block", "marginRight":"20px" ,"marginTop":"10px", "padding":"10px 15px", "cursor":"pointer", "background":"blue", "border":"none", "borderRadius":"5px"}} onClick={handleSubmit} type="submit">Submit</button>
                    <button style={{"display":"block", "marginTop":"10px", "padding":"10px 15px", "cursor":"pointer", "background":"red", "color":"white" ,"border":"none", "borderRadius":"5px"}} onClick={()=> setDisplay(prev => !prev)}>Close</button>
                </div>
                <button onClick={upLoadAll}>Upload All</button>
            </form>
            }
        </div>
    )
}

export default AddSong;