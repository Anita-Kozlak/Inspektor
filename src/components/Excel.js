import React, { useEffect, useState } from "react";
import { URL } from "url";
import * as XLSX from "xlsx";

function Excel() {

  const [items, setItems] = useState([]);


    // const url = "https://1drv.ms/x/s!AnBVRGVOqW42i5hUbPB-12CuxJMkXg?e=qfYQcx";/// nie działa

    fetch("excel.xlsx")
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const wb = XLSX.read(ab, { type: "array" });
        console.log(wb);

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);
        console.log(data[0]);
        setItems(data);

      });

  return (
    <div>
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">Dzień</th>
            <th scope="col">Godzina</th>
            <th scope="col">Sala</th>
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key={d.dzień}>
              <th>{d.dzień}</th>
              <td>{d.godzina}</td>
              <td>{d.sala}</td>
              <td>{d.dyrygent}</td>
              <td>{d.orkiestra}</td>
              <td>{d.program}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Excel;
