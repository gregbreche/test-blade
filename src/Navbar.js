import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import { Drawer, MenuItem } from 'material-ui';

export default class TopNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handler = this.props.handler.bind(this);
    }



    render() {

        let color = 'grey';

        return (
            <div>
                <Navbar color="dark" dark>
                    <NavbarToggler onClick={this.props.handler} className="mr-2" />
                    <NavbarBrand href="/" className="mr-auto" id="pageTitle">
                        Association pour sauver le monde
                    </NavbarBrand>
                    <i className="fa fa-info-circle fa-lg" aria-hidden="true" id="infoCircle" />
                    <Collapse isOpen={this.props.navOpened} navbar>
                        <Nav navbar>
                        </Nav>
                    </Collapse>
                    <Drawer
                        width={200}
                        open={this.props.navOpened}
                        id="drawer"
                        containerStyle={{top:56}}
                    >
                        <MenuItem onClick={this.props.handler}>Close Me</MenuItem>
                    </Drawer>
                </Navbar>
            </div>
        );
    }
}