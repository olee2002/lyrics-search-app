import React, { useState, useEffect } from 'react'

export default function Searchbar({ songs, search, setSearch }) {
   const handleChange = (event) => {
      setSearch(event.target.value)
   }
   return (
      <div className='search'>
         <div className='search-header'>
            <h1>
               <i className='fas fa-music'></i> Search for a song.
            </h1>
            <p>Get lyrics from any track</p>

            <input
               value={search}
               onChange={handleChange}
               placeholder='Start Typing...'
               className='input'
            />
         </div>
      </div>
   )
}
