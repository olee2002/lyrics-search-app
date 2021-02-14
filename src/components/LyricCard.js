import React from 'react'
import { truncate } from '../utils'

export default function LyricCard({ track }) {
   return (
      <div className='card'>
         <div className='artist-name'>{track.artist_name}</div>
         <div>
            <i class='fas fa-play'></i>Track:{' '}
            <strong>{truncate(track.track_name)}</strong>
         </div>
         <div>
            <i class='fas fa-compact-disc'></i>Album:{' '}
            <strong>{truncate(track.album_name)}</strong>
         </div>
         <button>
            <strong>View Lyrics</strong>
         </button>
      </div>
   )
}
