import React from 'react';

class BackgroundImage extends React.Component {

    render() {

        var blur = {};
        if( this.props.blurred ) {
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