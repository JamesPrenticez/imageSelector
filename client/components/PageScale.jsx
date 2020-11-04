import React from 'react'

function PageScale() {

    const setScale = () => {
        var value = scaleSelect.options[scaleSelect.selectedIndex].value;
        document.getElementById("book").style.transform = `scale(${value})`    
    }

    return (
        <>
<div id="book">
                <div className="page" id="page">
                    <div className="subpage">Page 1/2</div>
                </div>
                <div className="page" id="page">
                    <div className="subpage">Page 2/2</div>
                </div>
</div>

<div className="nav">
            <select id="scaleSelect" title="Zoom" tabIndex="1" onChange={setScale}>
                    <option id="pageAutoOption" value="auto">Automatic Zoom</option>
                    <option id="pageActualOption" value="page-actual">Actual Size</option>
                    <option id="pageFitOption" value="page-fit">Page Fit</option>
                    <option id="100" value="1">100%</option>
                    <option id="125" value="1.25">125%</option>
                    <option id="150" value="1.5">150%</option>
                    <option id="200" value="2">200%</option>
                    <option id="300" value="3">300%</option>
                    <option id="400" value="4">400%</option>
            </select>
</div>

        </>
    )
}


export default PageScale