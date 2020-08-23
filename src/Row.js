import React, { useState, useEffect } from 'react';

function Row({title, fetchURL}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    return () => {
      
    }
  }, [])


  return (
    <div>
      <h2>{title}</h2>

    </div>
  )
}

export default Row
