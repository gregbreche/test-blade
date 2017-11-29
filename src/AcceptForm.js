import React from 'react';
import { Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';

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

        let phoneValid = '';
        const phoneRegEx = /^[0-9]{10}$/;

        return (
            <Row id="acceptForm" style={style}>
                <Form>
                    <FormGroup row>
                        <Label for="nom" sm={4}>Nom</Label>
                        <Col sm={8}>
                            <Input type="text" name="nom" id="nom" placeholder="Nom" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="prenom" sm={4}>Prénom</Label>
                        <Col sm={8}>
                            <Input type="text" name="prenom" id="prenom" placeholder="Prénom" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="profession" sm={4}>Profession</Label>
                        <Col sm={8}>
                            <Input type="text" name="profession" id="profession" placeholder="Profession" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="langue" sm={4}>Langue</Label>
                        <Col sm={8}>
                            <Input type="text" name="langue" id="langue" placeholder="Langue" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="situationFamiliale" sm={4}>Situation familiale</Label>
                        <Col sm={8}>
                            <Input type="text" name="situationFamiliale" id="situationFamiliale" placeholder="Situation Familiale" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={4}>Adresse email</Label>
                        <Col sm={8}>
                            <Input type="email" name="email" id="email" placeholder="Adresse email" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="telephone" sm={4}>Téléphone</Label>
                        <Col sm={1}>
                            <i className="fa fa-phone fa-lg" aria-hidden="true" id="infoPhone" />
                        </Col>
                        <Col sm={5}>
                            <Input type="text" name="telephone" id="telephone" placeholder="Téléphone" />
                        </Col>
                        <Col sm={2}>
                            <Input type="select" name="selectMulti" id="exampleSelectMulti">
                                <option>Portable</option>
                                <option>Fixe</option>
                            </Input>
                        </Col>
                    </FormGroup>
                </Form>
            </Row>
        );
    }
}

export default AcceptForm;