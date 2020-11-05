import React from 'react'

function PageScale() {

    const setScale = () => {
        var value = scaleSelect.options[scaleSelect.selectedIndex].value;
        document.getElementById("mainWrapper").style.transform = `scale(${value})`    
    }

    return (
        <>
<div className="nav">
            <select id="scaleSelect" title="Zoom" tabIndex="1" onChange={setScale}>
                    <option id="pageAutoOption" value="auto">Automatic Zoom</option>
                    <option id="pageActualOption" value="page-actual">Actual Size</option>
                    <option id="pageFitOption" value="page-fit">Page Fit</option>
                    <option id="50" value="50">50%</option>
                    <option id="75" value="75">75%</option>
                    <option id="100" value="100">100%</option>
                    <option id="125" value="125">125%</option>
                    <option id="150" value="150">150%</option>
                    <option id="200" value="200">200%</option>
            </select>
</div>

<div id="mainWrapper">
                <div className="page" id="page">
                    <div className="subpage">Page 1/2</div>
                </div>
                <div className="page" id="page">
                    <div className="subpage">Page 2/2</div>
                </div>
</div>


        </>
    )
}


export default PageScale