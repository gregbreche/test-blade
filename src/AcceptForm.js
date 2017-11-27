import React from 'react';
import { Row, Col } from 'reactstrap';

class AcceptForm extends React.Component {

    render() {

        let style = {
            display: 'block',
        };

        if(this.props.blurredBackground) {
            style = {
                display: 'block',
            };
        } else {
            style = {
                display: 'none',
            };
        }

        return (
            <Row id="acceptForm" style={style}>
                <Col>
                    Here goes the accept Form
                </Col>
            </Row>
        );
    }
}

export default AcceptForm;