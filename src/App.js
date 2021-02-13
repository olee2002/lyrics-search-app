import React, { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import LyricLists from './components/LyricLists'

import { getSongs } from './data/apiCalls'

import './App.scss'
console.log('process', process.env)

function App() {
   const [page, setPage] = useState(1)
   const [page_size, setPageSize] = useState(10)
   const [songs, setSongs] = useState([])

   useEffect(() => {
      const getSongData = async () => {
         const songs = await getSongs(page, page_size)
         setSongs(songs)
      }

      getSongData()
   }, [])
   console.log('songs', songs)
   return (
      <div className='App'>
         <Navbar />
         <div className='container'>
            <Searchbar songs={songs} />
            <LyricLists songs={songs} />
         </div>
      </div>
   )
}

export default App
