import React from 'react'

function PageScale() {

    const setScale = () => {
        var scale = document.getElementById("scaleSelect")
        var value = scaleSelect.options[scaleSelect.selectedIndex].value
        // document.getElementsByClassName("page").style.transform = `scale(${value})`; 
        document.getElementById("pagea").style.transform = `scale(${value})`
        alert({value})
    }


    return (
        <>
            <div id="pagea"></div>

            <div class="book">
                <div class="page">
                    <div class="subpage">Page 1/2</div>
                </div>
                <div class="page">
                    <div class="subpage">Page 2/2</div>
                </div>
            </div>

<div class="nav">
            <select id="scaleSelect" title="Zoom" tabindex="23" data-l10n-id="zoom" onChange={setScale}>
                    <option id="pageAutoOption" title="" value="auto" selected="selected" data-l10n-id="page_scale_auto">Automatic Zoom</option>
                    <option id="pageActualOption" title="" value="page-actual" data-l10n-id="page_scale_actual">Actual Size</option>
                    <option id="pageFitOption" title="" value="page-fit" data-l10n-id="page_scale_fit">Page Fit</option>
                    <option id="pageWidthOption" title="" value="page-width" data-l10n-id="page_scale_width">Page Width</option>
                    <option id="customScaleOption" title="" value="custom" disabled="disabled" hidden="true"></option>
                    <option title="" value="0.5" data-l10n-id="page_scale_percent" data-l10n-args="{ &quot;scale&quot;: 50 }">50%</option>
                    <option title="" value="0.75" data-l10n-id="page_scale_percent" data-l10n-args="{ &quot;scale&quot;: 75 }">75%</option>
                    <option title="" value="1" data-l10n-id="page_scale_percent" data-l10n-args="{ &quot;scale&quot;: 100 }">100%</option>
                    <option title="" value="1.25" data-l10n-id="page_scale_percent" data-l10n-args="{ &quot;scale&quot;: 125 }">125%</option>
                    <option title="" value="1.5" data-l10n-id="page_scale_percent" data-l10n-args="{ &quot;scale&quot;: 150 }">150%</option>
                    <option title="" value="2" data-l10n-id="page_scale_percent" data-l10n-args="{ &quot;scale&quot;: 200 }">200%</option>
                    <option title="" value="3" data-l10n-id="page_scale_percent" data-l10n-args="{ &quot;scale&quot;: 300 }">300%</option>
                    <option title="" value="4" data-l10n-id="page_scale_percent" data-l10n-args="{ &quot;scale&quot;: 400 }">400%</option>
            </select>
</div>

        </>
    )
}


export default PageScale