function Hero (props) {
	// body... 
	return (
		<div id = 'container'>	
			<img src={props.imageURL} height="300" width="300"/>
		</div>
	);
}

ReactDOM.render(<Hero imageURL="img/1.jpg"/>, document.getElementById('img-photos'));