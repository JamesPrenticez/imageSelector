import React from 'react'

export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        }
        this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
    }

	previousSlide () {
		const lastIndex = this.props.imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = this.props.imgUrls.length - 1; //5
		console.log(lastIndex)
		const { currentImageIndex } = this.state; //0
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
		this.setState({
			currentImageIndex: index
		});
		console.log(index)
	}

	selectedSlide (index) {
		const cat = JSON.stringify(Object.values(index))
		const {currentImageIndex} = this.state; //0
		this.setState({
			currentImageIndex: this.props.imgUrls + cat
		});

		console.log(JSON.stringify(`${this.props.imgUrls+cat))
	}
    
    
	render () {
		const elements = [
							`${this.props.imgUrls[0]}`,
							`${this.props.imgUrls[1]}`,
							`${this.props.imgUrls[2]}`,
							`${this.props.imgUrls[3]}`,
							`${this.props.imgUrls[4]}`,
						]

		return (
			<>
			<div className="jobContainer">
				<div className="carousel">

							<div className="image-slide" style={{backgroundImage: `url(${this.props.imgUrls[this.state.currentImageIndex]})`}}>
								<div className="prev" onClick={() => {this.previousSlide()}}>&#10094;</div>
								<div className="next" onClick={() => {this.nextSlide()}}>&#10095;</div>
							</div>


						<div className="thumbnail">
							{elements.map((value, index) => {
								return  <li key={index}>
											<div className="thumb" style={{backgroundImage: `url(${value})`}} onClick={() => {this.selectedSlide({index})}}></div>
										</li>
								})}		
						</div>
				</div>
			</div>
			</>
		);
	}
}



