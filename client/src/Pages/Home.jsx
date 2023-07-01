import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Datauploading, GetBillData } from "../apicall";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtoBill } from "../Redux/BillDataRedux";
const Home = () => {
  //current time
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;


  const [vrno, setVrno] = useState(Number);
  const [vrdate, setDate] = useState(today);
  const [acname, setAcname] = useState("");
  const [acamt, setAcamt] = useState(Number);
  const [srno, setsrNo] = useState(Number);
  const [itemcode, setItemcode] = useState("");
  const [itemname, setItemName] = useState("");
  const [qty, setQty] = useState(Number);
  const [rate, setRate] = useState(Number);
  const [amt, setAmt] = useState(Number);
  const [total, setTotal] = useState(Number);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);


  const Amount = useSelector((state) => state.BillData.TotalPrice);
  console.log("Total amount ok ***", Amount);

  const dispatch = useDispatch();

  //create a new row in atable
  const handleKeyPress = (e) => {
    e.preventDefault();
    const newRow = { id: data.length + 1, Text: "" };
    console.log("newarray", newRow);
    setData([...data, newRow]);
  };

  //apicall
  const saveData = () => {
    setCount(count + 1);
    Datauploading({
      vrno,
      vrdate,
      acname,
      acamt,
      srno,
      itemcode,
      itemname,
      qty,
      rate,
      amt: rate * qty,
    });
    dispatch(addtoBill({ vrno,
      vrdate,
      acname,
      acamt,
      srno,
      itemcode,
      itemname,
      qty,
      rate,
      amt: rate * qty}));
    setTimeout(() => {
      GetBillData(dispatch, vrno);
    }, 1000);
  };


  const Reload = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div className="Main">
      <div className="Left">
        <h2 className="Title">Header</h2>
        <div className="Header">
          <div className="Htop">
            <span>
              VR No : -{" "}
              <input
                style={{ width: "70px", border: "2px solid black" }}
                type="text"
                onChange={(e) => setVrno(e.target.value)}
              />
            </span>

            <span>
              VR Date : -{" "}
              <input
                style={{ width: "70px", border: "2px solid black" }}
                type="text"
                value={today}
                name={today}
                onChange={(e) => setDate(e.target.value)}
              />
            </span>

            <span>
              Status : &nbsp;{" "}
              <input
                style={{ width: "70px", border: "none" }}
                value={"ok"}
                type="text"
              />
            </span>
          </div>

          <div className="Hbottom">
            <span>
              A/C Name : -{" "}
              <input
                style={{ width: "300px", border: "2px solid black" }}
                type="text"
                onChange={(e) => setAcname(e.target.value)}
              />
            </span>

            <span>
              A/C Amt : -{" "}
              <input
                style={{ width: "70px", border: "2px solid black" }}
                type="text"
                value={Amount}
                onChange={(e) => setAcamt(e.target.value)}
              />
            </span>
          </div>
        </div>

        <h2 className="Title">Details</h2>
        <div className="Details">
          <table style={{ width: "100%", border: "1px solid black" }}>
            <tr className="Tr">
              <th className="Th">Sr No</th>
              <th className="Th">Item Code</th>
              <th className="Th">Item Name</th>
              <th className="Th">Qty</th>
              <th className="Th">Rate</th>
            </tr>
            {data.map((row) => (
              <tr className="Tr" key={row.id}>
                <td className="Td">
                  <input
                    type="text"
                    style={{
                      border: "none",
                      width: "98%",
                      textAlign: "center",
                    }}
                    onChange={(e) => setsrNo(e.target.value)}
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
                    onChange={(e) => setItemcode(e.target.value)}
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
                    onChange={(e) => setItemName(e.target.value)}
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
                    onChange={(e) => setQty(e.target.value)}
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
                    onChange={(e) => setRate(e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </table>
          <div style={{ textAlign: "right", marginRight: "10em" }}>
            Total :- &nbsp; {Amount}
          </div>
        </div>
      </div>
      <div className="RightBar">
        <h3 style={{ cursor: "pointer" }} onClick={Reload}>
          New
        </h3>
        <h3 onClick={handleKeyPress} style={{ cursor: "pointer" }}>
          Insert
        </h3>
        <h3 onClick={saveData} style={{ cursor: "pointer" }}>
          Save
        </h3>
        <h3 style={{ cursor: "pointer" }}>
          <Link to={"print"}>Print</Link>
        </h3>
      </div>
    </div>
  );
};

export default Home;
