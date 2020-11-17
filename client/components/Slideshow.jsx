import React from 'react'

export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef()
        this.slideRef = React.createRef()
        this.state = {
            files: [],
            urls: [],
            slideIndex: 3,
        }
    }

    componentDidMount() {
        this.show()
    }

    handleChange(e) {
        this.setState(e);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('handle uploading-', this.state.files)
    }

    currentSlide = (n) => {
        // showSlides(slideIndex = n);
      }

    plusSlides = (n) => {
        this.showSlides(this.state.slideIndex += n);
    }

    showSlides = (n) => {
        var i    
        //var slides = document.getElementsByClassName("mySlides")
        var slides = this.slideRef
        var dots = document.getElementsByClassName("demo")
        var captionText = document.getElementById("caption")
        if (n > slides.length) {this.setState.slideIndex = 1}//reset to defualt
        if (n < 1) {this.setState.slideIndex = slides.length}//reset 
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "")
        }
        console.log(slides[1])
        //slides[this.state.slideIndex-1].style.display = "block"
        //dots[this.state.slideIndex-1].className += " active"
        //captionText.innerHTML = dots[slideIndex-1].alt
    }

    show = () => {
        this.showSlides(this.state.slideIndex)
    }
    
    
    render() {
        const { urls, files } = this.state
        return (
            <>
                <div className="container">
{/*Arrow Navigation*/}
                    <div className="mySlides" ref={this.slideRef}>
                        <div className="numbertext">1 / 6</div>
                        <img src="./img/default.png" width="100%"></img>
                    </div>

                    <div className="mySlides">
                        <div className="numbertext" ref={this.slideRef}>2 / 6</div>
                        <img src="./img/brick.png" width="100%"></img>
                    </div>

                    <div className="mySlides">
                        <div className="numbertext" ref={this.slideRef}>3 / 6</div>
                        <img src="/img/rockcote.png" width="100%"></img>
                    </div>

                    <div className="mySlides">
                        <div className="numbertext" ref={this.slideRef}>4 / 6</div>
                        <img src="/img/linea.png" width="100%"></img>
                    </div>

                    <div className="mySlides">
                        <div className="numbertext" ref={this.slideRef}>5 / 6</div>
                        <img src="/img/cedar.png" width="100%"></img>
                    </div>

                    <div className="mySlides">
                        <div className="numbertext" ref={this.slideRef}>6 / 6</div>
                        <img src="/img/oblique.png" width="100%"></img>
                    </div>

{/*Arrow Navigation*/}
                    <a className="prev" onClick={this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={this.plusSlides(1)}>&#10095;</a>

{/*Caption*/}
                    <div className="caption-container">
                        <p id="caption"></p>
                    </div>
{/*Thumbnails*/}
                    <div className="row">
                        <div className="column">
                            <img className="demo cursor" src="./img/default.png" width="100%" onClick={this.currentSlide(1)} alt="The Woods"></img>
                        </div>
                        <div className="column">
                            <img className="demo cursor" src="./img/brick.png" width="100%" onClick={this.currentSlide(2)} alt="Cinque Terre"></img>
                        </div>
                        <div className="column">
                            <img className="demo cursor" src="/img/rockcote.png" width="100%" onClick={this.currentSlide(3)} alt="Mountains and fjords"></img>
                        </div>
                        <div className="column">
                            <img className="demo cursor" src="/img/linea.png" width="100%" onClick={this.currentSlide(4)} alt="Northern Lights"></img>
                        </div>
                        <div className="column">
                            <img className="demo cursor" src="/img/cedar.png" width="100%" onClick={this.currentSlide(5)} alt="Nature and sunrise"></img>
                        </div>
                        <div className="column">
                            <img className="demo cursor" src="/img/oblique.png" width="100%" onClick={this.currentSlide(6)} alt="Snowy Mountains"></img>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

