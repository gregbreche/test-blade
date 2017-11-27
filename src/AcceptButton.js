import React from 'react';

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
                <button onClick={this.toggle} id="accept">
                    Accepter
                </button>
            </div>
        );
    }
}

export default AcceptModal;
