import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleChangeWidth(e) {
    setWidth(e.target.innerWidth);
  }

  function handleChangeHeight(e) {
    setHeight(e.target.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', handleChangeWidth);
    return () => {
      window.removeEventListener('resize', handleChangeWidth);
    }
  })

  useEffect(() => {
    window.addEventListener('resize', handleChangeHeight);
    return () => {
      window.removeEventListener('resize', handleChangeHeight);
    }
  })


  return (
    // <!-- 708px - width, 798px - heigh -->
<div className="dimensions">{width}px - {height}px</div>
  )
}

export default Dimensions;