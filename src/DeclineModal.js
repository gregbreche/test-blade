import React from 'react';
import {FlatButton, Dialog} from 'material-ui';

const customContentStyle = {
    width: '30%',
    maxWidth: 'none',
};

class DeclineModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            declineModalUp: false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({
           declineModalUp: true
        });
    }

    handleClose() {
        this.setState({
            declineModalUp: false
        });
    }

    render() {
        const actions = [
            <FlatButton
                label="Annuler"
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Oui"
                primary={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div id="declineForm">
                <FlatButton label="Décliner" onClick={this.handleOpen} />

                <Dialog
                    title="Message"
                    actions={actions}
                    modal={false}
                    open={this.state.declineModalUp}
                    onRequestClose={this.handleClose}
                    contentStyle={customContentStyle}
                >
                    Êtes-vous sûr de vouloir décliner le formulaire de contact ?
                </Dialog>


            </div>
        );
    }
}

export default DeclineModal;
