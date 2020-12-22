import React from 'react'

export default class ImageUpload extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			files: [],
			urls: [],
			isDragging: false
		}
		
		this.onChange = this.onChange.bind(this);
		this.handleDrop = this.handleDrop.bind(this);
		this.handleDragEnter = this.handleDragEnter.bind(this);
		this.handleDragOver = this.handleDragOver.bind(this);
		this.handleDragLeave = this.handleDragLeave.bind(this);
		this.handleFiles = this.handleFiles.bind(this);
		this.onRemove = this.onRemove.bind(this);
	}
	
	onRemove(index) {
		var {files, urls} = this.state;
		let newFiles = files.filter((file, i) => i !== index);
		let newUrls = urls.filter((url, i) => i !== index);
		
		this.setState({
			...this.state,
			files: newFiles,
			urls: newUrls
		});
	}
	
	handleDrags(e) {
		e.preventDefault();
		e.stopPropagation();
		
		this.setState({
			...this.state,
			isDragging: true
		});
	}
	
	handleDragEnter(e) {
		this.handleDrags(e);
	}
	
	handleDragOver(e) {
		this.handleDrags(e);
	}
	
	handleDragLeave(e) {
		e.preventDefault();
		e.stopPropagation();
		
		this.setState({
			...this.state,
			isDragging: false
		});
	}
	
	onChange(e) {
		e.preventDefault()
		const files = e.target.files;
		[].forEach.call(files, this.handleFiles);
	}
	
	handleDrop(e) {
		e.stopPropagation();
		e.preventDefault();
		
		const data = e.dataTransfer;
		const files = data.files;
		console.log("Oops...you dropped this: ", files);
		
		[].forEach.call(files, this.handleFiles);
		
		this.setState({
			...this.state,
			isDragging: false
		});
	}
	
	handleFiles(file) {
		
		// this could be refactored to not use the file reader
		
		var reader = new FileReader();
		
		reader.onloadend = () => {

			var imageUrl = window.URL.createObjectURL(file);
			
			this.setState({
				files: [file, ...this.state.files],
				urls: [imageUrl, ...this.state.urls]
			});
			
		}
		
		reader.readAsDataURL(file);
    }
    
    handleSubmit = e => {
        e.preventDefault();
        console.log('handle uploading-', this.state.files);
      }
	
	render() {
		const {urls, files, isDragging} = this.state;
		const dropClass = isDragging ? "dragDrop dragging" : "dragDrop";
		
		return (
			<div>
				<div className="uploadInput" >
					
                    <input type="file"
						onChange={this.onChange}
						accept="image/*"
						multiple
					/>
            
                    <button type="submit" onClick={this.handleSubmit}>Upload to Server</button>

					<div className={dropClass} 
						onDrop={this.handleDrop}
						onDragOver={this.handleDragOver}
						onDragEnter={this.handleDragEnter}
						onDragLeave={this.handleDragLeave} >
						<div className="inside">
							<span>DRAG & DROP FILES HERE</span>
						</div>
					</div>	
				</div>
				<div className="imagePreviewContainer">
					{
						urls && (urls.map((url, i) => (
							<div className="previewItem">
								<img className="imagePreview" src={url} />
								<div className="details">
									<h6>{files[i].name}</h6>
									<h6>{files[i].size.toLocaleString()} KBs</h6>
									<h6>{files[i].type}</h6>
									<i className="material-icons" 
									onClick={() => this.onRemove(i)}>delete</i>
								</div>
							</div>
						)))
					}
				</div>
			</div>
		);
	}
}

