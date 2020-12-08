import React, { useState } from "react";
import {Link} from "react-router-dom";
import * as XLSX from "xlsx";

const FirstWeek = () => {


    const [items, setItems] = useState([]);

    // const url = "https://1drv.ms/x/s!AnBVRGVOqW42i5hUbPB-12CuxJMkXg?e=qfYQcx";/// nie działa

    fetch("excel.xlsx")
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const wb = XLSX.read(ab, { type: "array" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);
        setItems(data);
      });
    return (
      <div className="firstWeek">
        <Link to="/workplan">
          <span className="close" />
        </Link>
       
        <table class="table container">
          <thead>
            <tr>
              <th>Dzień</th>
              <th>Godzina</th>
              <th>Sala</th>
              <th>Dyrygent</th>
              <th>Orkiestra</th>
              <th>Program</th>
            </tr>
          </thead>
          <tbody>
            {items.map((d) => (
              <tr key={d.Dzień}>
                <td>{d.Dzień}</td>
                <td>{d.Godzina}</td>
                <td>{d.Sala}</td>
                <td>{d.Dyrygent}</td>
                <td>{d.Orkiestra}</td>
                <td>{d.Program}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
export default FirstWeek;