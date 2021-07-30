import axios from 'axios'

const send=(method:string,url:string,data?:unknown)=>{
    if(method==='GET'){
        return axios({
            method:'GET',
            url,
            params:data
        })
    }
    else if(method==='POST'){
        return axios({
            method:'POST',
            url,
            data
        })
    }
    else if(method==='DELETE'){
        return axios({
            method:'DELETE',
            url,
            data
        })
    }
    else if(method==='PUT'){
        return axios({
            method:'PUT',
            url,
            data
        })
    }
}

export default send