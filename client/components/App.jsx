import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Sidebar from './Sidebar'

// import ImageViewer from './ImageViewer'
import HouseViewer from './HouseViewer'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <Sidebar/>
<main>
    {/* <ImageViewer/> */}
    <HouseViewer/>
</main>
    <Footer/>

    </>
  )
}

export default App
