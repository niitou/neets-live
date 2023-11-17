import React from 'react'

function BannerComponent() {
  return (
    <div className='site-banner'>
      <img src={require("../Asset/Image/banner1.jpg")} alt="banner" className='banner-image'/>
    </div>
  )
}

export default BannerComponent