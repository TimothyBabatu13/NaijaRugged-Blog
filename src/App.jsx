import Layout from './Layout';
import './App.css'
import { useEffect, useState } from 'react';
// import LazyLoad from './LazyLoad';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from 'react';
import ViewSong from './components/ViewSong/ViewSong';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard';
import Error from './components/Error';

import AllData from './AllData';



const createContextHook = createContext();

function App() {
  const [lastSavedCategory, setLastSaveCategory] = useState(null);
  const[category, setCategory] = useState(lastSavedCategory||"songs");
  const [search, setSearch] = useState("")
  const [changeType, setChangeType] = useState(true)

    // console.log(db)

  const FetchData = ()=>{
    let data;
    AllData.forEach(item=>{
    
      if(item.type === category) {
        data = item.details
        
      }
      // console.log(data)
      
    })
    return data;
  }
  
  
  




  // console.log(localStorage.getItem("darkMode"));
  const [mode, setMode] = useState(localStorage.getItem("darkMode") || (window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light")
  
  const changeMode = ()=>{
    setMode(prev=>{
      if(prev === "light"){
        return "dark"
      }
      return "light"
    })
  }
  
  //Write this function in such a way that setCategory runs first, it waits for the value to be updated then it runs;
  
  const handleChangeType = (e)=>{
    setCategory(e.target.innerHTML.toLowerCase());
    setLastSaveCategory(e.target.innerHTML.toLowerCase());
  }
  
  useEffect(()=>{
    return window.localStorage.setItem("darkMode", mode)
  }, [mode])
  
  // console.log(localStorage.getItem("darkMode"))
  
  const provider  = {
    mode,
    category,
    changeMode,
    handleChangeType,
    data: FetchData(),
    searchName: search,
    changeType,

  }

  const sendDataUp = (e)=>{
    setSearch(e)
  }
  const handleStop = ()=>{
    setChangeType(false)
  }
  const handleContinue = ()=>{
    setChangeType(true)
  }
  // console.log(provider)  
  return (
    <createContextHook.Provider value={provider}>
      <BrowserRouter>
        <div style={{"minHeight":"100vh", "padding": "0 25px 20px 25px"}} className={mode === "dark" ? "darkMode" : "whiteMode"}>
          <Routes>
            <Route element={<Layout changeType={changeType} sendDataUp={sendDataUp}/>}>
              <Route path='/' element={<Home handleContinue={handleContinue} />}/>
              <Route path={`/view/:type/:id`} element={<ViewSong handleStop={handleStop}/>}/>
              <Route path='/admin' element={<Admin category={category} className={mode}/>}/>
              <Route path='/dashboard' element={<Dashboard category={category} darkMode={mode}/>}/>
              <Route path='*' element={<Error />}/>
            </Route>
          </Routes>
        </div>
    </BrowserRouter>
    </createContextHook.Provider>
    
  )
}

export default { App, createContextHook}
// export default AppAndContext
