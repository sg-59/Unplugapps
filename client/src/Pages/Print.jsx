import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./style.css";
import { useDispatch } from 'react-redux';
import { addtoBill } from '../Redux/BillDataRedux';
import axios from 'axios';

const Print = () => {
  const dispatch=useDispatch()
  const [apiData, setApiData] = useState([]);
  const [filterApi, setfilterApi] = useState([]);
  const data=useSelector((state)=>state.BillData.currentBill)
  console.log('data data',data.vrno);
useEffect(()=>{
 const SavedData = async()=>{
    try {
      const res = await axios.get("http://localhost:7000/api/unplugapp");
      console.log("getApiData", res.data);
      setApiData(res.data);
    } catch (err) {
      console.log(err);
    } 
  };
  SavedData()
},[])


useEffect(()=>{
    
const filterApiData = apiData.filter((li) => {
  return li.vrno == data.vrno;
});
console.log("filteredApidata", filterApiData);
 setfilterApi(filterApiData)
},[apiData])


  


const Total=useSelector((state)=>state.BillData.TotalPrice)
console.log('erro adikkaruhe',data);

 return (
    <div className="PrintData">
    <table style={{ width: "100%", border: "1px solid black" }}>
      <tr className="Tr">
        <th className="Th">Sr No</th>
        <th className="Th">Item Code</th>
        <th className="Th">Item Name</th>
        <th className="Th">Qty</th>
        <th className="Th">Rate</th>
      </tr>
      {filterApi?.map((item)=>(

  
        <tr className="Tr" >
          <td className="Td">
            <input
              type="text"
              style={{
                border: "none",
                width: "98%",
                textAlign: "center",
              }}
              value={item.srno}
            />
          </td>
          <td className="Td">
            <input
              type="text"
              style={{
                border: "none",
                width: "98%",
                textAlign: "center",
              }}
              value={item.itemcode}
            />
          </td>
          <td className="Td">
            <input
              type="text"
              style={{
                border: "none",
                width: "98%",
                textAlign: "center",
              }}
              value={item.itemname}
            />
          </td>
          <td className="Td">
            <input
              type="text"
              style={{
                border: "none",
                width: "98%",
                textAlign: "center",
              }}
              value={item.qty}
            />
          </td>
          <td className="Td">
            <input
              type="text"
              style={{
                border: "none",
                width: "98%",
                textAlign: "center",
              }}
              value={item.rate}
            />
          </td>
        </tr>
    ))}
    </table>
    <div style={{ textAlign: "right", marginRight: "10em" }}>
      Total :- &nbsp; {Total}
    </div>
  </div>
  )
}

export default Print