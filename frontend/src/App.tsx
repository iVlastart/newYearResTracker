import { useEffect, useState } from "react";
import type { IResolution } from ".";
import { loadResolutions } from "./api/api";
import { Resolutions } from "./resolutions/resolutions";

export default function App(){
  const [data, setData] = useState<IResolution[]>([]);
  useEffect(()=>{
    loadResolutions({setData}); 
  },[]);
  return(
    <>
      <div className="text-center text-3xl font-bold">
        New Year Resolution Tracker
      </div>
      <Resolutions data={data} />
    </>
  );
}