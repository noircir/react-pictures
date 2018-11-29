import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {spans: 0 };

        // Use 'createRef' to access an element in the virtual DOM, 
        // not waiting for the actual DOM to appear on webpage. 
        // Assign it to an instance variable.
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // On load, execute setSpans function
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height/10);
        this.setState({spans});
    }

    render () {

        const { description, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;