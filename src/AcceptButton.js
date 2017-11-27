import React from 'react';
import { Container, Row, Col } from 'reactstrap';

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
            <div id="acceptForm">
                <button onClick={this.toggle} id="accept">
                    Accepter
                </button>
            </div>
        );
    }
}

export default AcceptModal;

/*<Container style={style}>
                    <Row>
                        <Col>
                            <p>Banane</p>
                        </Col>
                    </Row>
                </Container>*/