import React from 'react'
import {Button, Grid} from '@mui/material'
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "flowbite/dist/flowbite.min.js";

function Hero() {
  return (
    <Grid container className="bg-[#CDA792]" spacing={2}>
    <Grid item sx={{marginTop:"-16px"}} md={4} xs={12}>
    <div id="indicators text-center" class="relative w-full" data-carousel="static">
  
  <div class="relative h-[50vh] overflow-hidden">
      
      <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
          <img src="./bridebox.jpeg" class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
      </div>
    
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="./silklace.jpeg"   class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
      </div>
    
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="./sandals1.jpeg"   class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
      </div>
     
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="./sleepshirt.jpeg"  class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
      </div>
  
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="./plainsatin.JPG"  class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
      </div>
  </div>

  <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
  </div>

  <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          <span class="sr-only">Previous</span>
      </span>
  </button>
  <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
      <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          <span class="sr-only">Next</span>
      </span>
  </button>
</div>
    </Grid>
    <Grid item xs={12} md={8}>
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold md:text-left tracking-tight leading-none text-[#D7FFA5] md:text-4xl dark:text-white">Discover</h1>
          <p className="mb-8 text-2xl font-normal md:text-left text-white md:text-6xl">Our New Products For You.</p>
          <Link to="/products">
            <Button variant='contained'  sx={{backgroundColor:"#73A336", ":hover":{backgroundColor:"darkgreen"}}}>Products &nbsp; <ArrowForwardIcon/></Button>
          </Link>
      </div>
  </section>
    </Grid>
    </Grid>
  )
}

export default Hero
