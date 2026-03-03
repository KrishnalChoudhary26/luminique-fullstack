import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {

    if (!token) {
      return null
    }
    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      }
      else {
        toast.error(response.data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }

  }

  const statusHandler = async(event,orderId)=>{
     try {
      const response = await axios.post(backendUrl+'/api/order/status',{orderId,status:event.target.value},{headers:{token}})
      if(response.data.success){
        await fetchAllOrders()
      }
     } catch (error) {
    console.log(error);
    
      toast.error(response.data.message)
     }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((order, index) => {
            return (
            <div className="
  grid 
  grid-cols-1 
  md:grid-cols-5 
  gap-6 
  items-start 
  border border-gray-300 
  p-6 
  my-4
">

  {/* 1️⃣ Image */}
  <div>
    <img src={assets.parcel_icon} alt="" className="w-16" />
  </div>

  {/* 2️⃣ Product + Address */}
  <div className="space-y-1">
    {order.items.map((item, index) => (
      <p key={index}>
        {item.name} x {item.quantity} {item.size}
      </p>
    ))}

    <p className="font-medium mt-2">
      {order.address.firstName} {order.address.lastName}
    </p>
    <p>{order.address.street}</p>
    <p>
      {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
    </p>
    <p>{order.address.phone}</p>
  </div>

  {/* 3️⃣ Order Info */}
  <div className="space-y-1">
    <p>Items : {order.items.length}</p>
    <p>Method : {order.paymentMethod}</p>
    <p>Payment : {order.payment ? "Done" : "Pending"}</p>
    <p>Date : {new Date(order.date).toLocaleDateString()}</p>
  </div>

  {/* 4️⃣ Amount */}
  <div className="font-semibold">
    {currency}{order.amount}
  </div>

  {/* 5️⃣ Status */}
  <div>
    <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="border p-2 rounded">
      <option>Order Placed</option>
      <option>Packing</option>
      <option>Shipped</option>
      <option>Out For Delivery</option>
      <option>Delivered</option>
    </select>
  </div>

</div>

            )
          })
        }
      </div>
    </div >
  )
}

export default Orders
