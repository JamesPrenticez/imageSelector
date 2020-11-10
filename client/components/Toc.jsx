import React from 'react'

export default class Toc extends React.Component {

	
	render() {
		
		return (
<>
<div className="Toc"> 
<ul>
  <li>
    Web Development
    <ul>
      <li>HTML</li>
      <li>
        CSS
        <ul>
          <li>CSS Introduction</li>
          <li>CSS Selectors</li>
          <li>CSS Animation</li>
        </ul>
      </li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Graphics Design</li>
  <li>Computer Education</li>
</ul>
</div>
<div className="Pagination"> 
<ul>
  <li class="previous">&lt;</li>
  <li>a</li>
  <li>b</li>
  <li>c</li>
  <li>d</li>
  <li>e</li>
  <li>f</li>
  <li class="next">&gt;</li>
</ul>
</div>
</>
		)
	}
}

