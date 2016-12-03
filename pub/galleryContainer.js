const galleryContainer = React.createClass({
	render() {
		return (
			React.createElement("div", {className: "commentBox"},
				React.createElement(galleryComp, {
				images: this.props.images,
				isThumb: false,
				imageCount: 7
			}),
				React.createElement(galleryComp, {
					images: this.props.images,
					isThumb: true,
					imageCount: 50
				})
			)
		)
	}
});
