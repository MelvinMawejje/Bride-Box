import React from 'react'
import { Grid } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
var currencyFormatter = require("currency-formatter");

function ProductPageCard({src, itemName, price}) {
  return (
    <div class="max-w-sm lg:w-[300px] xs:w-[300px] m-12 text-left rounded overflow-hidden bg-[#6C8152] shadow-lg">
  <img class="w-full" src={src} alt="Sunset in the mountains"/>
  <div class="mx-2 text-white py-4">
    <div class="font-bold text-xl mb-2">{itemName}</div>
  </div>
  <Grid container>
    <Grid item xs={7} md={6}>
    <span class="inline-block px-3 text-white py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {currencyFormatter.format(parseInt(price), {
        symbol: 'UGX',
        precision: 0,
        format: '%v %s'
  })}</span>
    </Grid>
    <Grid item xs={5} md={6}>
      <div className="text-right me-10">
      <ShoppingBagIcon sx={{fontSize:"40px", color:"#B3EA1F"}} className="rounded-full text-[20px] bg-white p-1 mb-2"/>
      </div>
    </Grid>
    </Grid>
</div>
  )
}

export default ProductPageCard