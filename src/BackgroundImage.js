import React from 'react';

class BackgroundImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blurred: props.blurredBackground
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            blurred: !this.state.blurred
        });
    }

    render() {

        var blur = {};
        if( this.state.blurred ) {
            blur = {
                filter: 'blur(5px)',
            };
        } else {
            blur = {};
        }

        return (
            <div id="backgroundImage" style={blur}>
            </div>
        );
    }
}

export default BackgroundImage;