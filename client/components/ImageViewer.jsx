import React from 'react'
import { render } from 'react-dom';

export default class ImageViewer extends React.Component {

//Filter Selection    
filterSelection = (c) => {
console.log("filterSelection")
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
    this.w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) this.w3AddClass(x[i], "show");
    }
}

// Show filtered elements
w3AddClass = (element, name) => {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

// Hide elements that are not selected
w3RemoveClass = (element, name) => {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
}
element.className = arr1.join(" ");
}

render(){
return(
    <>
        <h1>Image Viewer</h1>
        <h2>PORTFOLIO</h2>
        

        <button className="btn" onClick={() => this.filterSelection('all')}> Show all</button>
        <button className="btn" onClick={this.filterSelection}> Alexandra</button>
        <button className="btn" onClick={this.filterSelection}> Cars</button>
        <button className="btn" onClick={this.filterSelection}> People</button>


        <div className="row">

            <div className="column">
                <div className="content">
                <img src="./img/houses/alexandra/alexandra.png" alt="alexandra"></img>
                <h4>Alexandra</h4>
                <p>Cover</p>
                </div>
            </div>

            <div className="column">
                <div className="content">
                <img src="./img/houses/alexandra/alexandra_floor.png" alt="alexandra"></img>
                <h4>Alexandra</h4>
                <p>Floor</p>
                </div>
            </div>

            <div className="column">
                <div className="content">
                <img src="./img/houses/alexandra/alexandra_elevation.png" alt="alexandra"></img>
                <h4>Alexandra</h4>
                <p>Elevation</p>
                </div>
            </div>

            <div className="column">
                <div className="content">
                <img src="./img/houses/alexandra/alexandra_3d.png" alt="alexandra"></img>
                <h4>Alexandra</h4>
                <p>3d</p>
                </div>
            </div>
      
        </div>

    </>
        )
    }
}


