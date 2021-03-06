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
    <table className="table-fixed">
      {/* <div>admin</div> */}
      <thead>
        <tr>
          <th className="w-1/2 px-4 py-2">Hospital Name</th>
          <th className="w-1/2 px-4 py-2">Doctor Email</th>
          <th className="w-1/2 px-4 py-2">Total Appointment</th>
          <th className="w-1/2 px-4 py-2"> Total users</th>
          <th className="w-1/2 px-4 py-2">Total Doctors</th>
        </tr>
      </thead>
      {empList.map((val, key) => {
        return (
          <>
            <tbody>
              <tr>
                <td className="border px-4 py-2">{val.name}</td>
                <td className="border px-4 py-2">{val.email}</td>
                <td className="border px-4 py-2">{val.password}</td>
                <td className="border px-4 py-2">{val.cpassword}</td>
                <td className="border px-4 py-2">{val.company}</td>

              </tr>
            </tbody>
          </>
        );
      })}
    </table>
  );
}

export default Admin;
