const galleryComp = React.createClass({
	getInitialState: function () {
		return {
			images: this.props.images,
			currentImage: 0,
			//bonusClass: this.props.isThumb ? "no-opacity" : ""
		};
	},
	componentDidMount: function () {
		window.addEventListener('scroll', this.handleScroll);
		return;
		this.setState({
			bonusClass: ""
		})
	},

	componentWillUnmount: function () {
		window.removeEventListener('scroll', this.handleScroll);
	},

	handleScroll: function (event) {
		var currentYPosition = window.scrollY;
		var imageSize = window.innerHeight;

		const startingIndex = Math.floor(currentYPosition / imageSize - Math.floor(this.props.imageCount / 2))


		this.setState({
			currentImage: startingIndex > 0 ? startingIndex : 0
		});
	},

	translateImageStyle(imageIndex){
		return {
			transform: `translate(0, ${imageIndex}00vh)`,
		}
	},

	renderImages(initialImage){

		var renderedImages = [];
		for (var currentImgIndex = initialImage; (currentImgIndex < initialImage + this.props.imageCount) && (currentImgIndex < this.props.images.length)
		&& this.props.images[currentImgIndex].low_resolution; currentImgIndex++) {
			renderedImages.push(<img key={currentImgIndex}
			                         style={this.translateImageStyle(currentImgIndex)}
			                         src={this.props.images[currentImgIndex][this.props.isThumb?'thumbnail':'low_resolution'].url}/>);
		}
		return renderedImages;
	},
	setGaleryHeight(){
		return {
			height: this.state.images.length + "00vh",
		}
	},

	render() {
		return (
			<div id={"gallery_" + this.props.isThumb} className="gallery fast" style={this.setGaleryHeight()}>
				{this.renderImages(this.state.currentImage)}
			</div>
		)
	}
});
