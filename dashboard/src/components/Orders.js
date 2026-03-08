import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {

  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {

    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.log("No userId found");
      return;
    }

    axios
      .get(`http://localhost:3002/allOrders/${userId}`)
      .then((res) => {

        console.log("Orders fetched:", res.data);

        setOrders(res.data);

      })
      .catch((err) => {
        console.log(err);
      });

  };

  useEffect(() => {

    fetchOrders();

  }, []);

  return (

    <div className="orders">

      <h3 className="fs-3.5 mx-2" style={{color:"#e5e7eb"}}>
        Orders
      </h3>

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

              {orders.length === 0 ? (

                <tr>
                  <td colSpan="4" style={{textAlign:"center"}}>
                    No Orders Yet
                  </td>
                </tr>

              ) : (

                orders.map((order, index) => (

                  <tr key={index}>

                    <td>{order.name}</td>

                    <td>{order.qty}</td>

                    <td>₹{order.price}</td>

                    <td className={order.mode === "BUY" ? "profit" : "loss"}>
                      {order.mode}
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default Orders;