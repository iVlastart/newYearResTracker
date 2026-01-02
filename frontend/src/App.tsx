import { useEffect, useState } from "react";
import type { IResolution } from ".";
import { loadResolutions } from "./api/api";

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
      {
        data.map((resolution)=>(
          <div key={resolution.id} className="border m-4 p-4 rounded shadow flex flex-col justify-center items-center gap-y-3">
            <div className="text-xl font-semibold">{resolution.name}</div>
            <div className="flex flex-row gap-10">
              <div className="text-gray-600">{resolution.description}</div>
              <div className="flex flex-row gap-x-1">
                <input type="checkbox" defaultChecked={resolution.isChecked} id={`chckIsChecked-${resolution.id}`} /> 
                <label htmlFor={`chckIsChecked-${resolution.id}`}>Finished</label>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
}