import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const userId = localStorage.getItem("userId");

    axios
      .get(`http://localhost:3002/allOrders/${userId}`)
      .then((res) => {

        setOrders(res.data);

      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (

    <div className="orders">

      <div className="content">

        <div className="order-table">

          <table>

            <thead>

              <tr>

                <th>Stock</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order, index) => (

                <tr key={index}>

                  <td>{order.name}</td>

                  <td>{order.qty}</td>

                  <td>₹{order.price}</td>

                  <td className={order.mode === "BUY" ? "profit" : "loss"}>
                    {order.mode}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default Orders;