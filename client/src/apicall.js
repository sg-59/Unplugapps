import axios from "axios"
import { TotalAmount } from "./Redux/BillDataRedux";

export const Datauploading= async(data)=>{
    console.log('apicall ok aahno?',data);
    try{
const res=await axios.post("http://localhost:7000/api/unplugapp",data)
console.log('apicall data',res);
    }catch(err){
console.log(err);
    }
}

export const GetBillData=async(dispatch,Id)=>{
console.log('id?',Id);
    try{
const res=await axios.get(`http://localhost:7000/api/unplugapp/${Id}`)
console.log('Nodejs filtering',res.data[0].total);
dispatch(TotalAmount(res.data[0].total))
    }catch(err){
        console.log(err);
    }
}

