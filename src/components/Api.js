import { collection, getDocs, addDoc } from "firebase/firestore";
import firebaseConfig from "../firebaseConfig";
import {getStorage, uploadBytesResumable, ref, getDownloadURL} from "firebase/storage";

const db = firebaseConfig.database;
const colRef = (ref) => collection(db, ref)

const readData = (ref)=>getDocs(colRef(ref)).then(x => (x.docs.map(data=> data.data())));
const sendData = (ref, data)=> {
    addDoc(colRef(ref), data).then(data => console.log("succesful",data))
    .catch(err => (err))
}



const uploadFile = (data, doThis)=>{
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
      console.log("succesful")
      doThis(downloadURL)
    });
  }
);
}

export default {readData, sendData, uploadFile};