import { useEffect, useState } from "react";
import axios from "axios";
import type { IResolution } from ".";

export default function App(){
  const [data, setData] = useState<IResolution[]>([]);
  const loadResolutions = async ()=>{
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/resolutions`);
      setData(res.data.data.data);
  };
  useEffect(()=>{
    loadResolutions(); 
  },[]);
  return(
    <>
      <div className="text-center text-3xl font-bold">
        New Year Resolution Tracker
      </div>
      {
        data.map((resolution)=>(
          <div key={resolution.id} className="border m-4 p-4 rounded shadow flex flex-col justify-center items-center gap-y-3">
            <div className="text-xl font-semibold">{resolution.name}</div>
            <div className="flex flex-row gap-10">
              <div className="text-gray-600">{resolution.description}</div>
              <div>
                <input type="checkbox" defaultChecked={resolution.isChecked} /> Finished
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
}