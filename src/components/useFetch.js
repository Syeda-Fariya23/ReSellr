import { useEffect, useState } from "react"

export const BASE_URL="https://resellr-backend.vercel.app/"
export const useFetch=((url)=>{
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                setError(null)
                const res=await fetch(url);
                if(!res.ok)
                {
                    throw new Error(`Error :${res.status}`)

                }
                const json=await res.json();
                setData(json);

            }
            catch(error)
            {
                setError(error.message)
            }
        };
        fetchData();
    },[url])
    return{data,error}
})