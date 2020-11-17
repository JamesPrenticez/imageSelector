import React from 'react'

import ImageSelector from './ImageSelector'
import PageScale from './PageScale'
import ImageUpload from './ImageUpload'
import ImageUpload2 from './ImageUpload2'
import ImageViewer from './ImageViewer'
import Toc from './Toc'
import TableOfContents from './TableOfContents'
import Slideshow from './Slideshow'


const imgUrls = [
  "../img/default.png",
  "../img/brick.png",
  "../img/cedar.png",
  "../img/linea.png",
  "../img/oblique.png",
  "../img/rockcote.png"
];

const App = () => {
  return (
    <>
    {/* <ImageSelector/> */}
    {/* <PageScale/> */}
    {/* <ImageUpload/> */}
    {/* <ImageUpload2/> */}
    {/* <ImageViewer/> */}
    {/* <Toc/> */}
    {/* <TableOfContents/> */}
    <Slideshow imgUrls={imgUrls}/>
    </>
  )
}

export default App
