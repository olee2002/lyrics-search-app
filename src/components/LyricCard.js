import React from 'react'

export default function LyricCard({ track }) {
   return (
      <div className='card'>
         <div className='artist-name'>{track.artist_name}</div>
         <div>
            <i class='fas fa-play'></i>Track:{' '}
            <strong>{track.track_name}</strong>
         </div>
         <div>
            <i class='fas fa-compact-disc'></i>Album:{' '}
            <strong>{track.album_name}</strong>
         </div>
         <button>View Lyrics</button>
      </div>
   )
}
