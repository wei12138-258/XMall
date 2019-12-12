import axios from "./axios"

export const getArtcleList = ()=>{
    axios.post("/api/artcleList").then(res =>{
        console.log(res)
    })
}