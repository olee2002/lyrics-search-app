import React, { useState } from 'react'
import Select from 'react-select'

const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' },
]
export default function Searchbar() {

   const [selectedOption, setSelectedOption] = useState()

   const handleChange = (selectedOption) => {
      setSelectedOption(selectedOption)
      console.log(`Option selected:`, selectedOption)
   }
   return (
      <div className='search'>
         <div className='search-header'>
            <h3>
               <i className='fas fa-music'></i> Search for a song.
            </h3>
            <p>get lyrics from any track</p>

            <Select
               value={selectedOption}
               onChange={handleChange}
               options={options}
               placeholder='Type...'
            />
         </div>
      </div>
   )
}
