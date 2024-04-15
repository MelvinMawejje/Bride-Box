import React from 'react'
import { Grid, IconButton } from '@mui/material';
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Auth from '../Firebase/Authentication/auth';
import EditIcon from '@mui/icons-material/Edit';
import { Link, useNavigate } from 'react-router-dom';
var currencyFormatter = require("currency-formatter");

function ProductCard({src, itemName, price, itemId}) {
  const navigate = useNavigate()
  let cprice = currencyFormatter.format(parseInt(price), {
    symbol: 'UGX',
    precision: 0,
    format: '%v %s' // %s is the symbol and %v is the value
  });
  return (
    
    <div class="max-w-sm xl:w-[500px] xs:w-[300px] m-12 text-left rounded overflow-hidden bg-[#E6E6E6] shadow-lg">
      <Link to={`/details/${itemId}`}>
  <img class="w-full" src={`${src}`} alt="Item image"/>
  <div class="px-6 py-4">
    <p class="text-gray-700 text-base">
      {itemName}
    </p>
  </div>
  </Link>
  <Grid container>
    <Grid item xs={7} md={6}>
    <span class="inline-block px-3 text-black py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">{cprice}</span>
    </Grid>
    <Grid item xs={5} md={6}>
      <div className="text-right me-10">
      <ShoppingBagIcon sx={{fontSize:"40px", color:"white"}} className="rounded-full text-[20px] bg-[#B3EA1F] p-1 mb-2"/>
      </div>
    </Grid>
    </Grid>
    {Auth.getUser() != null?
    <IconButton onClick={() => navigate(`/edit/${itemId}`)} className="text-right">
      <EditIcon sx={{fontSize:"40px", color:"white"}} className="rounded-full text-[20px] bg-blue-500 p-1"/>
    </IconButton>:
    null
    }
</div>

  )
}

export default ProductCard