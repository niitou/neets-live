import React from 'react'
import MainComponent from '../Component/MainComponent'
import '../Asset/Style/style.css'
import BannerComponent from '../Component/BannerComponent'

function MainPage() {
  return (
    <div className='wrapper'>
      <BannerComponent/>
      <MainComponent />
    </div>

  )
}

export default MainPage