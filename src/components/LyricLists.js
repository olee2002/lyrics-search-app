import React from 'react'

import LyricCard from './LyricCard'
import Spinner from './Spinner'

export default function LyricLists({ songs }) {
   return (
      <div>
         <h3>Top 10 Tracks</h3>
         <div className='card-list'>
            {songs?.length > 0 ? (
               songs.map((song, i) => (
                  <div key={i}>
                     <LyricCard track={song.track} />
                  </div>
               ))
            ) : (
               <Spinner />
            )}
         </div>
      </div>
   )
}
