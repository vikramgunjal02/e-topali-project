import React from "react";
import "../../style/App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
function Admin() {
  const [empList, setEmpList] = useState([]);
  const getData = () => {
    Axios.get("http://localhost:3005/allData").then((Response) => {
      setEmpList(Response.data);
    });
  };
  useEffect(() => {
    getData();
  });

  return (
    <table className="border-collapse border border-slate-500 ...">
      {/* <div>admin</div> */}
      <thead>
        <tr>
          <th className="border border-slate-600 ...">Name</th>
          <th className="border border-slate-600 ...">Email</th>
          <th className="border border-slate-600 ...">Password</th>
        </tr>
      </thead>
      {empList.map((val, key) => {
        return (
          <>
            <tbody>
              <tr>
                <td className="border border-slate-700 ...">{val.name}</td>
                <td className="border border-slate-700 ...">{val.email}</td>
                <td className="border border-slate-700 ...">{val.password}</td>
              </tr>
            </tbody>
          </>
        );
      })}
    </table>
  );
}

export default Admin;
