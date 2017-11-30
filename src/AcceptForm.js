import React from 'react';
import { Row, Col } from 'reactstrap';
import { Form, FormGroup, Label } from 'reactstrap';
import { TextField, SelectField, MenuItem, RaisedButton } from 'material-ui';

class AcceptForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            phoneType: 1,
            emailValidMessage: '',
            phoneValidMessage: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.checkEmailValidity = this.checkEmailValidity.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({
            phoneType: value
        });
    }

    checkEmailValidity(event, index, value) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(re.test(index)) {
            this.setState({
                emailValidMessage: ''
            });
        } else {
            this.setState({
                emailValidMessage: 'Adresse email incorrecte'
            });
        }
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
            <Row id="acceptForm" style={style}>
                <Form>
                    <FormGroup row>
                        <Label for="nom" sm={4}>Nom</Label>
                        <Col sm={8}>
                            <TextField name="nom" id="nom" hintText="Nom" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="prenom" sm={4}>Prénom</Label>
                        <Col sm={8}>
                            <TextField name="prenom" id="prenom" hintText="Prénom" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="profession" sm={4}>Profession</Label>
                        <Col sm={8}>
                            <TextField name="profession" id="profession" hintText="Profession" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="langue" sm={4}>Langue</Label>
                        <Col sm={8}>
                            <TextField name="langue" id="langue" hintText="Langue" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="situationFamiliale" sm={4}>Situation familiale</Label>
                        <Col sm={8}>
                            <TextField name="situationFamiliale" id="situationFamiliale" hintText="Situation Familiale" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={4}>Adresse email</Label>
                        <Col sm={8}>
                            <TextField name="email" id="email" hintText="Adresse email" onChange={this.checkEmailValidity} errorText={this.state.emailValidMessage} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="telephone" sm={4}>Téléphone</Label>
                        <Col sm={1}>
                            <i className="fa fa-phone fa-lg" aria-hidden="true" id="infoPhone" />
                        </Col>
                        <Col sm={5}>
                            <TextField name="telephone" id="telephone" hintText="Numéro de téléphone" fullWidth={true} />
                        </Col>
                        <Col sm={2}>
                            <SelectField
                                floatingLabelText="Type"
                                value={this.state.value}
                                onChange={this.handleChange}
                                fullWidth={true}
                            >
                                <MenuItem value={1} primaryText="Portable" />
                                <MenuItem value={2} primaryText="Fixe" />
                            </SelectField>
                        </Col>
                    </FormGroup>
                    <div id="validerForm">
                        <RaisedButton label="Valider" primary={true} />
                    </div>
                </Form>
            </Row>
        );
    }
}

export default AcceptForm;