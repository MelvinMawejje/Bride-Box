import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Firestore from '../Firebase/Firestore/firestore'
import { CircularProgress } from '@mui/material'
import Auth from '../Firebase/Authentication/auth';
var currencyFormatter = require("currency-formatter");

function ProductDetails() {
    const {id} = useParams()
    const [details, setDetails] = useState(null)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      async function fetchData() {
        let data = await Firestore.getItem(id)
        setDetails(data.val)
        setLoading(false)
      }
      fetchData()
    },[])

    const deleteHandler = async () => {
      setLoading(true)
        await Firestore.removeItem(details.itemId).then
        (e => {
          navigate("/")
        })
        setLoading(false)
    }


  if (details == null) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight:"80vh"
    }}>
        <CircularProgress size={100} sx={{color:"darkgreen"}}/>
    </div>
    )
  } else {
    return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="Item" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={details.image}/>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{details.name}</h1>
          <p className="leading-relaxed py-10">{details.description}</p>
            <span className="title-font font-medium text-2xl text-gray-900">{currencyFormatter.format(parseInt(details.price), {
                symbol: 'UGX',
                precision: 0,
                format: '%v %s'
              })}</span><br/>
            <span>
              <button className="mt-12 text-white bg-[#73A336] border-0 py-2 px-6 focus:outline-none hover:bg-[darkgreen] rounded">
                Add to Cart
              </button>
              {Auth.getUser() != null ? 
              <button disabled={loading} onClick={deleteHandler} className="text-white ms-12 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                {loading?<CircularProgress/>:"Delete Item"}
              </button>:
              null
              }
             
            </span>
        </div>
      </div>
    </div>
  </section>
    )
}
}
export default ProductDetails