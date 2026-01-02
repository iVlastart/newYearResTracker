import axios from "axios";
import type { IAPI } from ".";

export const loadResolutions = async ({setData}: IAPI)=>{
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/resolutions`);
      setData(res.data.data.data);
};