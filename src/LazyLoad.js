import { lazy } from "react";
const LazyLoad = (path)=> lazy(()=> import(/* @vite-ignore */path)); 
export default LazyLoad;