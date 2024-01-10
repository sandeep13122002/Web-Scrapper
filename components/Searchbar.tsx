"use client"

import React from 'react'

const Searchbar = () => {


const handleSubmit=()=>{
  console.log("fsddcvcvsvsdsfds")
}


  return (
    <form
    className="flex flex-wrap gap-4 mt-12"
    onSubmit={handleSubmit}
    >
      <input
      type="text"
      placeholder="Enter product link"
      className="search-input" 
      />
          <button type="submit" className="searchbar-btn">
            Search
          </button>
    </form>
  )
}

export default Searchbar