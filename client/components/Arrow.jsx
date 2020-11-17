import React from 'react'

export default function Arrow ({ direction, clickFunction, glyph }){
return(
React.createElement("div", {
  className: `slide-arrow ${direction}`,
  onClick: clickFunction },
glyph)
)
}