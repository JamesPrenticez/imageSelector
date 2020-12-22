import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import Sidebar from './Sidebar'

import ImageSelector from './ImageSelector'
import PageScale from './PageScale'
import ImageUpload from './ImageUpload'
import ImageUpload2 from './ImageUpload2'
import ImageViewer from './ImageViewer'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <Sidebar/>
<main>
    {/* <ImageSelector/> */}
    {/* <PageScale/> */}
    {/* <ImageUpload/> */}
    {/* <ImageUpload2/> */}
    <ImageViewer/>
</main>



{/* 
    <Footer/> */}
    </>
  )
}

export default App
