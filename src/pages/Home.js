import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero';
import { CircularProgress, Grid, Typography } from '@mui/material';
import ProductCard from '../Components/ProductCard';
import Firestore from '../Firebase/Firestore/firestore';

function Home() {
  const [bestProducts, setBestProducts] = useState(null)
  useEffect(() => {
    async function fetchData() {
      let products = await Firestore.getItems("Best Selling Products");
      setBestProducts([...products.val])
    }
    fetchData()
  }, [bestProducts])

  return (
    <>
    <Hero/>
    <Grid container className='px-10 py-4'>
    <Grid item xs={7} md={6}>
    <Typography sx={{fontSize:{md:"40px", xs:"18px"}}} className="md:ms-12">
        Best Selling Products
    </Typography>
    </Grid>
    <Grid item xs={5} md={6}>
        <Typography textAlign="right" sx={{textDecoration:"underline", fontSize:{md:"24px", xs:"18px"}}}>
        View All Products
        </Typography>
    </Grid>
    </Grid>
    <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6 grid-cols-1 place-items-center min-h-[40vh]">
    {
      bestProducts && bestProducts
      .map((doc) => {
        return (
          <ProductCard src={doc.image} itemId={doc.itemId} itemName={doc.name} price={doc.price}/>
        )
      })
    }
</div>

    
    </>
  )
}

export default Home