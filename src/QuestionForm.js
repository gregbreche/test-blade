import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DeclineModal from './DeclineModal';
import AcceptButton from './AcceptButton';
import AcceptForm from './AcceptForm';
import leafSource from './assets/leaf.jpg';

export default class QuestionForm extends React.Component {

    constructor(props) {

        super(props);

        this.handler = this.props.handler.bind(this);
    }

    render() {

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

                        <AcceptButton handler={this.props.handler} />
                        <DeclineModal />
                    </Col>
                </Row>

                <AcceptForm blurredBackground={this.props.blurredBackground} />

            </Container>
        );
    }
}