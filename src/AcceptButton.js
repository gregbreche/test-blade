import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class AcceptModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formHidden: true
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            formHidden: !this.state.formHidden
        });
        this.props.handler();
    }

    render() {

        let style = {
            display: 'block',
        };

        if( this.state.formHidden ) {
            style = {
                display: 'none',
            };
        } else {
            style = {
                display: 'block',
            };
        }

        return (
            <div id="acceptForm">
                <button onClick={this.toggle} id="accept">
                    Accepter
                </button>

                <Container style={style}>
                    <Row>
                        <Col>
                            <p>Banane</p>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default AcceptModal;
