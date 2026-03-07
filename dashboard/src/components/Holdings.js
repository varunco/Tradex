import React, { useState, useEffect } from "react";
import axios from "axios";

const Holdings = () => {

  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {

    const userId = localStorage.getItem("userId");

    axios
      .get(`http://localhost:3002/allHoldings/${userId}`)
      .then((res) => {

        setAllHoldings(res.data);

      });

  }, []);

  return (

    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">

        <table>

          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg</th>
            <th>LTP</th>
            <th>Value</th>
          </tr>

          {allHoldings.map((stock,index)=>{

            const value = stock.price * stock.qty;

            return(

              <tr key={index}>

                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg}</td>
                <td>{stock.price}</td>
                <td>{value}</td>

              </tr>

            )

          })}

        </table>

      </div>

    </>
  );

};

export default Holdings;