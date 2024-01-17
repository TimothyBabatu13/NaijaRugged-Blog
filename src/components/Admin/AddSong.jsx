import { useState, useContext, useRef } from "react";
import Api from "../Api";
import App from "../../App";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RenderSongFIleInput from "./RenderSongFIleInput";
import {getStorage, uploadBytesResumable, ref, getDownloadURL} from "firebase/storage";

const AddSong = ()=>{
    
    const [display, setDisplay] = useState(false);
    const [listOfTrack, setListOfTrack] = useState(['a']);
    const [disable, setDisable] = useState(false);
    const [form, setForm] = useState({
        artist: "",
        title: "",
        songFile: [],
        imgURL: "",
        description: "",
        type: ""
    })
    const [number, setNumber] = useState({
        image: 0,
        song: 0
    });
    const imageRef = useRef(null);
    const songRef = useRef(null);

    function checkIfNotEmpty(obj) {
        for (let key in obj) {
          if (obj[key] === '') {
            return false;
          }
        }
        return true;
      }

    const handleType = (e)=>{
        
        setForm(prev=>(
            {
                ...prev,
                [e.target.name]: `${e.target.value}`
            }
        ))
    }

    const addSong = ()=>{
        setDisplay(prev => !prev)
    }

    const handleSelectSongFile = (e) =>{
        setForm(prev => ({
            ...prev,
            songFile: [...prev.songFile, e.target.files[0]]
        }));
    }
  
    const handleSelectImage = (e)=>{
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
            setNumber(prev =>({
                ...prev,
                song: progress
            })); 
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
            setNumber(prev =>({
                ...prev,
                image: progress
            }));
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

    const addMoreSong = (e)=>{
        e.preventDefault();
        setListOfTrack(prev => [...prev, "a"])
    }
 
    const handleSubmit = (e)=>{

        e.preventDefault();
        const validate = checkIfNotEmpty(form);
        if(!validate){
            toast.error("One of the fields is empty. Please fill it and submit again");
            return;
        }
        if(form.type === "albums"){
            toast.error("You can't upload to album section. We're still implementing this feature");
            return
        }
        const u = [];
        let img;
        setDisable(true)
        form.songFile.forEach(item =>{
            toast.error("Uploading data to backend...Do not press anything");
            songRef.current.style.display = "block";
            return upLoadMusic(item, (downloadURL)=>{
                u.push(downloadURL);
                songRef.current.style.display = "none";
                imageRef.current.style.display = "block";
                upLoadImage(form.imgURL, (e)=>{
                    img = e;
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
                        console.log(dataToSend)
                        imageRef.current.style.display = "none";
                        const sendDataNow = ()=>{
                            Api.sendData(form.type, dataToSend);
                            toast.success("Data sent succesfully");
                            setDisable(false)
                        }
                        sendDataNow();
                })
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
                        listOfTrack.map((item, id) =>(<RenderSongFIleInput key={id} accept={form.type === "videos" ? false : true} handleSelectSongFile={handleSelectSongFile}/>))
                    }
                    {form.type === "albums" ? <button style={{"display":"inline"}} onClick={addMoreSong}>Add More Song</button> : <></>} 
                </div>
                
                <div>
                    <input onChange={handleSelectImage} accept="image/*" type="file" name="" id="imageFile" />
                    <label htmlFor="imageFile">Image File</label>
                </div>
                <div style={{"display":"flex", "alignItems":"center"}}>
                    <button style={{"display":"block", "marginRight":"20px" ,"marginTop":"10px", "padding":"10px 15px", "cursor":"pointer", "background":"blue", "border":"none", "borderRadius":"5px"}} disabled={disable} onClick={handleSubmit} type="submit">Submit</button>
                    <button style={{"display":"block", "marginTop":"10px", "padding":"10px 15px", "cursor":"pointer", "background":"red", "color":"white" ,"border":"none", "borderRadius":"5px"}} onClick={()=> setDisplay(prev => !prev)}>Close</button>
                </div>
                {/* <button onClick={upLoadAll}>Upload All</button> */}
                <div ref={imageRef} style={{position: "absolute", top: "20px", right: "15px",  display: "none"}}>
                    Uploading image file at {number.image}%
                </div>
                <div ref={songRef} style={{position: "absolute", top: "0", right: "15px", display: "none"}}>
                    Uploading audio file at {number.song}% 
                </div>
            </form>
            }
        </div>
    )
}

export default AddSong;