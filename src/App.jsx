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
  const[category, setCategory] = useState(JSON.parse(localStorage.getItem("category"))||"songs");
  const [search, setSearch] = useState("")
  const [changeType, setChangeType] = useState(true)
  const [mode, setMode] = useState(JSON.parse(window.localStorage.getItem("darkMode")) || ((window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light"));
  
  useEffect(()=>{
    localStorage.setItem("category", JSON.stringify(category))
  }, [category])

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
  }
  
  useEffect(()=>{
    return window.localStorage.setItem("darkMode", JSON.stringify(mode))
  }, [mode])

  
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
  
  return (
    <createContextHook.Provider value={provider}>
      <BrowserRouter>
        <div style={{"minHeight":"100vh", "padding": "0 25px 20px 25px"}} className={`${mode === "dark" ? "darkMode" : "whiteMode"} body--container`}>
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

export default { App, createContextHook }
// export default AppAndContext
