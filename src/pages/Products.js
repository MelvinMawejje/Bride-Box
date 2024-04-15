import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material';
import ProductPageCard from '../Components/ProductPageCard';
import OffersCard from '../Components/OffersCard';
import ProductHero from "../Components/ProductHero";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Firestore from '../Firebase/Firestore/firestore';

function Products() {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    async function fetchData() {
      let products = await Firestore.getAllItems();
      setProducts([...products.val])
    }
    fetchData()
  }, [products])
  return (
    <>
    <ProductHero/>
    <div style={{marginLeft:"20px"}}>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel sx={{fontSize:"20px"}} id="demo-simple-select-standard-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Sort By"
        >
          <MenuItem value={10}>Lowest Price</MenuItem>
          <MenuItem value={20}>Highest Price</MenuItem>
          <MenuItem value={30}>Newest Item</MenuItem>
          <MenuItem value={30}>Featured</MenuItem>
        </Select>
      </FormControl>
    </div>
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 grid-cols-1 place-items-center">
    {
      products && products
      .map((doc) => {
        return (
          <ProductPageCard src={doc.image} itemId={doc.itemId} itemName={doc.name} price={doc.price}/>
        )
      })
    }
</div>
    <Grid container className='px-10 py-4'>
    <Grid item xs={6}>
    <Typography sx={{fontSize:{md:"40px", xs:"18px"}}} className="md:ms-12">
        Explore More
    </Typography>
    </Grid>
    <Grid item xs={6}>
   
    </Grid>
    </Grid>
    <div className='xl:h-[60vh] pb-5 bg-[#CDA792] w-screen pt-5'>
    <div className="grid md:grid-cols-3 gap-6 grid-cols-1 place-items-center">
        <OffersCard itemName="Bridal Shoes" src="./hillsgd.JPG" />
        <OffersCard itemName="Bridal Sandals" src="./sandalcrossed.jpeg" />
        <OffersCard itemName="Bridal Accesories" src="./crown.jpeg" />
    </div>
    </div>
    </>
  )
}

export default Products