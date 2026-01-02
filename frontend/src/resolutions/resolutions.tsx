import type { IResolution } from ".";

export const Resolutions = ({data}:IResolution)=>{
    return(
        <>
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