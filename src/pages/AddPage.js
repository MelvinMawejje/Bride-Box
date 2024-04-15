import { CircularProgress, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'
import {Typography } from '@mui/material';
import DB from '../Firebase/DB/storage';
import Firestore from '../Firebase/Firestore/firestore';
import { useNavigate } from 'react-router-dom';

function AddPage() {
    const [file, setFile] = useState(null);
    const [path, setPath] = useState(null);
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    let x = Math.floor((Math.random() * 7000000) + 0);
    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        await DB.setItemImage(x.toString(),path);
        let imageUrl = await DB.getURL(x.toString())
        let response = await Firestore.addItem(
            category,
            event.target["name"].value,
            event.target["price"].value,
            event.target["description"].value,
            imageUrl.val,
            item_category,
            color,
            age_category,
            x.toString()
            );
        if (response.code == 0) {
            navigate("/")
        }
        setLoading(false)
    }
    function handleCategory(val) {
        setCategory(val.target.value)
    } 
    function handleChange(e) {
        let reader = new FileReader()
        reader.readAsArrayBuffer(e.target.files[0])
        reader.onload = () => {
            setPath(new Uint8Array(reader.result))
        }
        reader.onerror = () => {
            console.log(reader.error)
        }
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <div className='grid place-items-center'>
        <h2 className="text-center mt-4">
            <Typography variant="h3" component="h2">
                Add Item
            </Typography>
        </h2>

<form  onSubmit={handleSubmit} className="block w-[70vw] m-10 p-6 bg-white border border-gray-200 rounded-lg shadow" >
  <div class="mb-6">
  <div class="flex items-center justify-center w-full">
    
        {file === null?
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        </label>
        :
        <img class="h-auto max-w-lg rounded-lg" src={file} alt="image description"/>
        }
</div> 
<input id="dropzone-file" type="file" onChange={handleChange}  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item name</label>
    <input type="text" id="name" name='name' class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  <div class="mb-6">
    <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Price</label>
    <input type="number" name='price' id="price" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required/>
  </div>
  <div class="mb-6 w-[300px]">
  <InputLabel id="category">Item Category</InputLabel>
  <Select
    labelId="category"
    id="category-list"
    value={category}
    label="Category"
    onChange={handleCategory}
  >
    <MenuItem value={"Best Selling Products"}>Best Selling Products</MenuItem>
    <MenuItem value={"Robes"}>Robes</MenuItem>
    <MenuItem value={"Shoes"}>Shoes</MenuItem>
  </Select>
  <InputLabel id="type">Type</InputLabel>
  <Select
    labelId="type"
    id="type-list"
    value={category}
    label="Type"
    onChange={handleCategory}
  >
    <MenuItem value={"Best Selling Products"}>Best Selling Products</MenuItem>
    <MenuItem value={"Robes"}>Robes</MenuItem>
    <MenuItem value={"Shoes"}>Shoes</MenuItem>
  </Select>
  <InputLabel id="color">Colors</InputLabel>
  <Select
    labelId="color"
    id="color-list"
    value={category}
    label="Color"
    onChange={handleCategory}
  >
    <MenuItem value={"Best Selling Products"}>Best Selling Products</MenuItem>
    <MenuItem value={"Robes"}>Robes</MenuItem>
    <MenuItem value={"Shoes"}>Shoes</MenuItem>
  </Select>
  <InputLabel id="age_category">Age Category</InputLabel>
  <Select
    labelId="age_category"
    id="age_category-list"
    value={category}
    label="Age Category"
    onChange={handleCategory}
  >
    <MenuItem value={"Best Selling Products"}>Best Selling Products</MenuItem>
    <MenuItem value={"Robes"}>Robes</MenuItem>
    <MenuItem value={"Shoes"}>Shoes</MenuItem>
  </Select>
  </div>

<label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Description</label>
<textarea id="description" name='description' rows="4" class="block my-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
</textarea>
  <button type="submit"  disabled={loading} class="text-white bg-[#73A336] hover:bg-[#006400] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
    {loading?<CircularProgress/>:"Submit"}
    </button>
</form>

    </div>
  )
}

export default AddPage