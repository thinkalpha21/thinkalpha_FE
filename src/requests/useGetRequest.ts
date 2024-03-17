import axios from "axios";
import { useState, useEffect } from "react";
import { HOST } from "../globals";

const useGetRequest = (url:string) => {
  const [data, setData] = useState<any>(null);
  const access_token = window.sessionStorage.getItem("access");


  useEffect(() => {
    axios.get(HOST + url,{
      headers: {
        Authorization: access_token ? "Bearer " + access_token : null 
      }
    }).then((res) => res.data).then((data) => {
        if(data?.results){
            setData(data?.results)
        }else{
            setData(data)
        }
    }).catch(() => {
        setData(null)     
    });
  }, [url]);

  return data;
};

export default useGetRequest;
