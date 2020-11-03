import React from 'react'

function Homepage() {

    const setPicture = () => {
        var img = document.getElementById("claddingDropDown");
        var value = claddingDropDown.options[claddingDropDown.selectedIndex].value;
        document.getElementById("claddingImg").src=value;
    }

    return (
        <>
            <h1>Homepage</h1>

            <div id="cladding">
                <img id="claddingImg" src="./img/default.png"></img>
            </div>

            <select id="claddingDropDown" onChange={setPicture}>
                <option value="./img/default.png" selected>None</option>
                <option value="./img/cedar.png">Cedar</option>
                <option value="./img/rockcote.png">Rockcote</option>
                <option value="./img/brick.png">Brick</option>
                <option value="./img/linea.png">Linea</option>
            </select>
        </>
    )
}


export default Homepage