import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DeclineModal from './DeclineModal';
import AcceptButton from './AcceptButton';
import leafSource from './assets/leaf.jpg';

export default class QuestionForm extends React.Component {

    constructor(props) {

        super(props);

        this.handler = this.props.handler.bind(this);
    }

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
            <Container>
                <Row id="mainRow">

                    <Col md="4">
                        <img src={leafSource} alt="Superbe feuille" id="mainRow-image" />
                    </Col>

                    <Col md="8" id="mainRow-question">
                        <h4>Compléter ce formulaire de contact</h4>

                        <p id="speech">Ce formulaire est utile à notre base contact. Une fois enregistré, vous recevrez notre catalogue produit
                            ainsi que nos newsletters. Grâce à votre engagement au sein de notre association vous participez à rendre
                            ce monde plus juste. Merci !</p>

                        <DeclineModal />

                        <AcceptButton handler={this.props.handler} />
                    </Col>
                </Row>

                <Row id="acceptForm" style={style}>
                    <Col>
                        Here goes the accept Form
                    </Col>
                </Row>
            </Container>
        );
    }
}

    /*<Container>
                <Row>
                    <Col>.col</Col>
                </Row>
                <Row>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                </Row>
                <Row>
                    <Col xs="3">.col-3</Col>
                    <Col xs="auto">.col-auto - variable width content</Col>
                    <Col xs="3">.col-3</Col>
                </Row>
                <Row>
                    <Col xs="6">.col-6</Col>
                    <Col xs="6">.col-6</Col>
                </Row>
                <Row>
                    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                    <Col sm="4">.col .col-sm-4</Col>
                </Row>
                <Row>
                    <Col sm={{size: 6, push: 2}}>.col .col-sm-6 .col-sm-order-2 .col-sm-offset-b</Col>
                    <Col sm={{size: 6, pull: 1}}>.col .col-sm-6 .col-sm-order-2 .col-sm-offset-a</Col>
                </Row>
                <Row>
                    <Col sm="12" md={{size: 8, offset: 2}}>.col .col-sm-12 .col-md-6 .col-md-offset-3</Col>
                </Row>
                <Row>
                    <Col sm={{size: 'auto', offset: 1}}>.col .col-sm .col-sm-offset-1</Col>
                    <Col sm={{size: 'auto', offset: 1}}>.col .col-sm .col-sm-offset-1</Col>
                </Row>
            </Container>*/