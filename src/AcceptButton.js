import React from 'react';
import {FlatButton} from 'material-ui';

class AcceptModal extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.props.handler();
    }

    render() {

        return (
            <div id="acceptButton">
                <FlatButton label="Primary" primary={true} onClick={this.toggle} />
            </div>
        );
    }
}

export default AcceptModal;