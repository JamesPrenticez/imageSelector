import React from 'react'

export default function ImageSlide ({ url } = this.props) {
  console.log(url)  
  const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',

      backgroundColor: 'darkgrey',
    }
    return (
      React.createElement("div", { className: "image-slide", style: styles })
    );
    
  };