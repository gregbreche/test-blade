import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AcceptModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acceptModalUp: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            acceptModalUp: !this.state.acceptModalUp
        });
        this.props.handler();
    }

    render() {
        return (
            <div id="acceptForm">
                <button onClick={this.toggle} id="accept">
                    Accepter
                </button>

                <Modal isOpen={this.state.acceptModalUp} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>test</ModalHeader>
                    <ModalBody>
                        Êtes-vous sûr de vouloir décliner le formulaire de contact ?
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Annuler</Button>
                        <Button color="primary" onClick={this.toggle}>Oui</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }


}

export default AcceptModal;

/*
*/